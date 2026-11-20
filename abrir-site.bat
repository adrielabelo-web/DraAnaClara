@echo off
cd /d "%~dp0"
echo Subindo o site da Dra. Ana Clara. Deixe esta janela aberta enquanto estiver olhando.
if not exist node_modules call npm install
start "" http://localhost:4321/
call npm run dev -- --host

