#!/bin/bash

# Verifica se o usuário passou o diretório como argumento
if [ -z "$1" ]; then
    echo "Uso: $0 <diretório>"
    exit 1
fi

# Verifica se o diretório existe
if [ ! -d "$1" ]; then
    echo "Erro: O diretório $1 não existe."
    exit 1
fi

# Gera o HTML com links para cada pasta
echo "<html>"
echo "<body>"
echo "<h1>Pastas em $(basename "$1")</h1>"
echo "<ul>"

# Lista apenas os diretórios e cria links HTML
for dir in "$1"/*; do
    if [ -d "$dir" ]; then
        dir_name=$(basename "$dir")
        echo "<li><a href=\"$dir\">$dir_name</a></li>"
    fi
done

echo "</ul>"
echo "</body>"
echo "</html>"
