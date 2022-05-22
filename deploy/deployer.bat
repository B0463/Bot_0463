cd ..
rd /s /q .git
rd /s /q src
del .gitignore
del embed.txt
del package-lock.json
del package.json
del README.md
del tsconfig.json
npm install discord.js