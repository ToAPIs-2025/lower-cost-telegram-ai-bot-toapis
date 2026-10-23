import fs from 'node:fs/promises';
// Inject a durable server-side runner; preserve the bot's existing admission layer.
export function createToAPIsImageService(runImage) {
 return {async image(prompt, jobId) {
  if (!jobId || !prompt?.trim()) throw new Error('Stable job identity and prompt required');
  const result=await runImage({prompt,jobId,model:'gpt-image-2-vip'});
  if(result.status!=='completed') throw new Error('Task incomplete; resume existing identity');
  const raw=await fs.readFile(result.output);
  if(raw.length>10*1024*1024 || raw.subarray(0,8).toString('hex')!=='89504e470d0a1a0a') throw new Error('Invalid PNG');
  return raw;
 }};
}
