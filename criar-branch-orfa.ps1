# Solicita o nome da nova branch ao usuário
$branchName = Read-Host "Digite o nome da branch seguindo o padrão 'seu-nome/ferramenta' (ex.: pedro-henrique/reactjs)"
Write-Host "Criando branch órfã '$branchName'..."

# Cria a nova branch órfã
git checkout --orphan $branchName

# git rm -rf --cached readme.md
# rm readme.md

# Exibe uma mensagem informativa
Write-Host "Nova branch órfã '$branchName' criada com sucesso."

git add .
git commit -m "Criou branch órfa a partir da main e fez checkout nela"
pause