import { minify } from 'https://esm.sh/terser@5.10.0'

const { files } = await Deno.emit('./src/index.tsx', {
  bundle: 'classic',
  compilerOptions: {
    target: 'es2022'
  }
})

await Deno.mkdir('./dist')

for (const [key, content] of Object.entries(files)) {
  const path = key.replace('deno:///', '')

  if (path.endsWith('.js')) {
    const minified = await minify(content)
    await Deno.writeTextFile(`./dist/${path}`, minified)
  } else {
    console.log(`${path} skipped`)
  }
}
