#!/bin/bash

# Verifica se o diretório foi passado como argumento
if [ "$#" -ne 1 ]; then
    echo "Uso: $0 <diretório>"
    exit 1
fi

DIR="$1"

# Verifica se o diretório existe
if [ ! -d "$DIR" ]; then
    echo "Erro: O diretório '$DIR' não existe."
    exit 1
fi

# Encontra todos os arquivos .zip no diretório e subdiretórios
find "$DIR" -type f -name "*.zip" | while read -r zipfile; do
    echo "Descompactando '$zipfile' no mesmo diretório..."
    
    # Descompacta o arquivo diretamente no diretório onde ele está
    unzip -o -j "$zipfile" -d "$(dirname "$zipfile")"
    
    # Verifica o status da operação
    if [ $? -eq 0 ]; then
        echo "Sucesso ao descompactar: $zipfile"
    else
        echo "Erro ao descompactar: $zipfile"
    fi
done

echo "Processo concluído!"
