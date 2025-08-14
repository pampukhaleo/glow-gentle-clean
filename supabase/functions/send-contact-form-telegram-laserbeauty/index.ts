
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Function to send message to a specific chat
async function sendToTelegramChat(botToken: string, chatId: string, message: string, chatName: string) {
  try {
    console.log(`Sending message to ${chatName} (${chatId})`);
    
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Failed to send to ${chatName}:`, errorText);
      return { success: false, error: errorText, chatName };
    }

    console.log(`Successfully sent message to ${chatName}`);
    return { success: true, chatName };
  } catch (error) {
    console.error(`Error sending to ${chatName}:`, error);
    return { success: false, error: error.message, chatName };
  }
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, email, services, date, message } = await req.json();

    const botToken = Deno.env.get('TELEGRAM_LASERBEAUTY_BOT_TOKEN');
    const chatId1 = Deno.env.get('TELEGRAM_LASERBEAUTY_CHAT_ID');
    const chatId2 = Deno.env.get('TELEGRAM_LASERBEAUTY_CHAT_ID_2');

    if (!botToken) {
      console.error('Missing Telegram bot token');
      return new Response(
        JSON.stringify({ error: 'Telegram bot token missing' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!chatId1 && !chatId2) {
      console.error('No Telegram chat IDs configured');
      return new Response(
        JSON.stringify({ error: 'No Telegram chat IDs configured' }),
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

    // Prepare promises for sending to all configured chats
    const sendPromises = [];
    
    if (chatId1) {
      sendPromises.push(sendToTelegramChat(botToken, chatId1, telegramMessage, 'Chat 1'));
    }
    
    if (chatId2) {
      sendPromises.push(sendToTelegramChat(botToken, chatId2, telegramMessage, 'Chat 2'));
    }

    // Send messages to all chats in parallel
    console.log(`Sending contact form to ${sendPromises.length} Telegram chat(s)`);
    const results = await Promise.allSettled(sendPromises);

    // Process results
    const successResults = [];
    const errorResults = [];

    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        const sendResult = result.value;
        if (sendResult.success) {
          successResults.push(sendResult);
        } else {
          errorResults.push(sendResult);
        }
      } else {
        errorResults.push({
          success: false,
          error: result.reason,
          chatName: `Chat ${index + 1}`
        });
      }
    });

    // Log detailed results
    console.log(`Send results: ${successResults.length} successful, ${errorResults.length} failed`);
    
    if (successResults.length > 0) {
      console.log('Successful sends:', successResults.map(r => r.chatName).join(', '));
    }
    
    if (errorResults.length > 0) {
      console.log('Failed sends:', errorResults.map(r => `${r.chatName}: ${r.error}`).join('; '));
    }

    // Return success if at least one message was sent successfully
    if (successResults.length > 0) {
      const responseMessage = successResults.length === sendPromises.length 
        ? 'Contact form sent successfully to all recipients'
        : `Contact form sent successfully to ${successResults.length} of ${sendPromises.length} recipients`;

      return new Response(
        JSON.stringify({ 
          success: true, 
          message: responseMessage,
          details: {
            successful: successResults.length,
            total: sendPromises.length,
            errors: errorResults.length > 0 ? errorResults : undefined
          }
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } else {
      // All sends failed
      console.error('All Telegram sends failed');
      return new Response(
        JSON.stringify({ 
          error: 'Failed to send message to any Telegram chat',
          details: errorResults
        }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

  } catch (error) {
    console.error('Error in send-contact-form-telegram-laserbeauty function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
