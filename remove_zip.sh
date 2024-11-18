#!/bin/bash

# Diretório alvo
DIR="$1"

# Verifica se o diretório foi informado
if [ -z "$DIR" ]; then
  echo "Uso: $0 <caminho_do_diretorio>"
  exit 1
fi

# Verifica se o diretório existe
if [ ! -d "$DIR" ]; then
  echo "Erro: O diretório '$DIR' não existe."
  exit 1
fi

# Encontra e remove arquivos .zip
find "$DIR" -type f -name "*.zip" -exec rm -v {} \;

echo "Todos os arquivos .zip foram removidos de $DIR e subpastas."
