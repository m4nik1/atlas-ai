import Cerebras from '@cerebras/cerebras_cloud_sdk';
import type { ChatCompletion } from '@cerebras/cerebras_cloud_sdk/resources/chat/completions';

export type StreamMetadata = {
    type: 'metadata';
    totalTokens: number;
    tokensPerSecond: number;
    queryTimeMs: number;
};

export async function* runGemma(message : string): AsyncGenerator<string | StreamMetadata> {
    console.log("Called run gemma!, ", message)
    const client = new Cerebras({
        apiKey: process.env['CEREBRAS_API_KEY']
    });

    const startTime = Date.now();
    let totalTokens = 0;

    const stream = await client.chat.completions.create({
        messages: [{ role: 'user', content: message }],
        model: 'gemma-4-31b',
        stream: true,
    });
    for await (const chunk of stream) {
        const chunkResponse = chunk as ChatCompletion.ChatChunkResponse;
        const content = chunkResponse.choices?.[0]?.delta?.content || '';
        process.stdout.write(content);
        yield content;

        if (chunkResponse.usage?.completion_tokens) {
            totalTokens = chunkResponse.usage.completion_tokens;
        }
    }

    const queryTimeMs = Date.now() - startTime;
    const tokensPerSecond = queryTimeMs > 0 ? Math.round((totalTokens / queryTimeMs) * 1000) : 0;

    yield {
        type: 'metadata',
        totalTokens,
        tokensPerSecond,
        queryTimeMs
    };
}
