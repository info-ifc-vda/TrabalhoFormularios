import os

def remove_zip_files(directory):
    """
    Remove todos os arquivos .zip de um diretório e suas subpastas.

    :param directory: Caminho do diretório raiz onde os arquivos serão procurados.
    """
    # Verifica se o diretório existe
    if not os.path.exists(directory):
        print(f"Erro: O diretório '{directory}' não existe.")
        return

    # Percorre o diretório e suas subpastas
    for root, _, files in os.walk(directory):
        for file in files:
            # Verifica se o arquivo tem extensão .zip
            if file.lower().endswith('.zip'):
                file_path = os.path.join(root, file)
                try:
                    # Remove o arquivo
                    os.remove(file_path)
                    print(f"Removido: {file_path}")
                except Exception as e:
                    print(f"Erro ao remover '{file_path}': {e}")

# Caminho para o diretório raiz
diretorio = input("Digite o caminho do diretório: ").strip()

# Executa a função
remove_zip_files(diretorio)
