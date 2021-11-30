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
    await Deno.writeTextFile(`./dist/${path}`, content)
  } else {
    console.log(`${path} skipped`)
  }
}
