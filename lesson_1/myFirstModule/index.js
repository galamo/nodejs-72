
async function init() {
    console.log("This is my first Node.js Script")
    await new Promise((resolve) => setTimeout(resolve, 30000))
    console.log("Script ended!!!!")
};

init()
console.log("Script last line!!!!")