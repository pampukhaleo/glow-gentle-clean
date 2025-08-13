
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, email, services, date, message } = await req.json();

    const botToken = Deno.env.get('TELEGRAM_LASERBEAUTY_BOT_TOKEN');
    const chatId = Deno.env.get('TELEGRAM_LASERBEAUTY_CHAT_ID');

    if (!botToken || !chatId) {
      console.error('Missing Telegram credentials');
      return new Response(
        JSON.stringify({ error: 'Telegram configuration missing' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Format the message for Telegram
    const formattedServices = services.length > 0 ? services.join(', ') : 'Nicht angegeben';
    const formattedDate = date || 'Nicht angegeben';
    const formattedMessage = message || 'Keine zusätzlichen Nachrichten';
    const timestamp = new Date().toLocaleString('de-DE', {
      timeZone: 'Europe/Berlin',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });

    const telegramMessage = `🏢 *LaserBeauty - Neue Kontaktanfrage*

👤 *Kunde:* ${name}
📞 *Telefon:* ${phone}
${email ? `📧 *E-Mail:* ${email}` : ''}

💄 *Interessierte Services:* ${formattedServices}
📅 *Gewünschtes Datum:* ${formattedDate}

💬 *Nachricht:*
${formattedMessage}

🕐 *Eingegangen am:* ${timestamp}`;

    // Send message to Telegram
    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'Markdown',
      }),
    });

    if (!telegramResponse.ok) {
      const errorText = await telegramResponse.text();
      console.error('Telegram API error:', errorText);
      return new Response(
        JSON.stringify({ error: 'Failed to send message to Telegram' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Contact form successfully sent to Telegram');
    return new Response(
      JSON.stringify({ success: true, message: 'Contact form sent successfully' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in send-contact-form-telegram function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
