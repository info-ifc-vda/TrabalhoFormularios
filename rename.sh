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

# Renomeia cada pasta para remover espaços nos nomes
for dir in "$1"/*; do
    if [ -d "$dir" ]; then
        # Nome da pasta sem o caminho
        dir_name=$(basename "$dir")
        
        # Substitui espaços por sublinhados
        new_dir_name=$(echo "$dir_name" | tr ' ' '_')

        # Apenas renomeia se o nome tiver mudado
        if [ "$dir_name" != "$new_dir_name" ]; then
            mv "$dir" "$1/$new_dir_name"
            echo "Renomeado: '$dir_name' para '$new_dir_name'"
        fi
    fi
done
