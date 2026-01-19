
/**
 * SERVIÇO DE NOTIFICAÇÕES VIA WEBHOOK
 * 
 * Para receber as notificações:
 * 1. Crie um Webhook no seu canal do Discord ou Slack.
 * 2. Cole a URL gerada na constante WEBHOOK_URL abaixo.
 */

const WEBHOOK_URL = ""; // COLE SUA URL DE WEBHOOK AQUI

export const notifyEvent = async (message: string) => {
  if (!WEBHOOK_URL) {
    console.log("Notificação simulada (Webhook não configurado):", message);
    return;
  }

  try {
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `**[Azul Links]** ${message}`, // Formato para Discord
        text: `*[Azul Links]* ${message}`,    // Formato para Slack
      }),
    });
  } catch (error) {
    console.error("Erro ao enviar notificação:", error);
  }
};
