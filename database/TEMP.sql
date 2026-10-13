CREATE DATABASE temp_db;
 
USE temp_db;
 
CREATE TABLE clientes(
	id_cli INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR (50) NOT NULL,
    password VARCHAR(255) NOT NULL UNIQUE,
    CNPJ VARCHAR(18) NOT NULL UNIQUE,
    nome_empresa VARCHAR(60) NOT NULL,
    nome_responsavel VARCHAR(50) NOT NULL
);
 
CREATE TABLE produtos(
	id_prod INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    preco DECIMAL(10,2) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    nome_prod VARCHAR(40) NOT NULL
    );
    CREATE TABLE compra(
    id_compra INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_prod INT NOT NULL,
    pagamento VARCHAR(100) NOT NULL,
    FOREIGN KEY (id_prod) REFERENCES produtos (id_prod)
    );
CREATE TABLE servico(
	id_serv INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    preco_base DECIMAL (10,2) NOT NULL,
    categoria_serv VARCHAR(60) NOT NULL,
    descricao VARCHAR(255) NOT NULL
    );
CREATE TABLE servico_contratado(
	id_servCon INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_cli INT NOT NULL,
    id_serv INT NOT NULL,
    data_inicio DATE NOT NULL,
    data_fim DATE NULL,
    status_servCon VARCHAR(100) NULL,
    FOREIGN KEY (id_cli) REFERENCES clientes (id_cli),
    FOREIGN KEY (id_serv) REFERENCES servico (id_serv)
    );
    CREATE TABLE manutencao(
    id_manu INT NOT  NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL,
    contato INT NOT NULL,
    nome VARCHAR(50) NOT NULL,
    local_sistema VARCHAR(255) NOT NULL,
    tipo_sistema VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL
    );
CREATE TABLE solicitar_instalacao(
	id_insta INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_prod INT NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    cep VARCHAR(9) NOT NULL,
    quantia INT NOT NULL,
    nome_completo VARCHAR(50) NOT NULL,
    local_insta VARCHAR(255) NOT NULL,
    data_solicita DATE NOT NULL,
    FOREIGN KEY (id_prod) REFERENCES produtos (id_prod)
    );
    CREATE TABLE consultoria (
    id_cons INT AUTO_INCREMENT PRIMARY KEY,
    id_cli INT NOT NULL,
    consumo_mensal_kwh VARCHAR(50),
    valor_medio_fatura DECIMAL(10,2),
    equipamentos VARCHAR(255) NULL,
    objetivo_consultoria TEXT NOT NULL,
    data_solicita DATE NOT NULL,
    FOREIGN KEY (id_cli) REFERENCES clientes (id_cli)
);
    CREATE TABLE suport(
    id_sup INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    contato VARCHAR(200) NOT NULL,
    assunto TEXT NULL,
    menssagem TEXT NULL
    );
    
    DROP TABLE clientes;
    DROP TABLE produtos;
    DROP TABLE compra;
    DROP TABLE servico;
    DROP TABLE servico_contratado;
    DROP TABLE solicitar_instalacao;
    DROP TABLE categoria_prod;
    DROP TABLE consultoria;
    DROP TABLE suport;