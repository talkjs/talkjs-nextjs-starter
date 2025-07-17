export function getConversationId() : string | undefined {
    const isDemo = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

    if (!isDemo) {
      return;
    }

    let id = localStorage.getItem('demoConversationId');

    if (!id) {
      // Generate a new UUID
      id = crypto.randomUUID();
      localStorage.setItem('demoConversationId', id);
    }

    return id;
}
