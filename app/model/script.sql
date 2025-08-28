CREATE DATABASE db_aventura_pet;

USE db_aventura_pet;

CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome_usuario VARCHAR(100), 
    tipo_usuario BOOLEAN
);

CREATE TABLE contato_usuario(
    id_contato_usuario INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT,
    telefone VARCHAR(20),
    cep VARCHAR(7),
    email VARCHAR(100),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

CREATE TABLE password_hash(
    id_password_hash INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT,
    password_hash VARCHAR(300),
    ativo BOOLEAN,
    data_criacao DATE,
    data_inaticacao DATE,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

CREATE TABLE especie (
    id_especie INT PRIMARY KEY AUTO_INCREMENT,
    nome_especie VARCHAR(50)
);

CREATE TABLE raca(
    id_raca INT PRIMARY KEY AUTO_INCREMENT,
    id_especie INT,
    nome_raca VARCHAR(50),
    FOREIGN KEY (id_especie) REFERENCES especie(id_especie)
);

CREATE TABLE porte(
    id_porte INT PRIMARY KEY AUTO_INCREMENT,
    nome_porte VARCHAR(50)
);

CREATE TABLE cor(
    id_cor INT PRIMARY KEY AUTO_INCREMENT,
    nome_cor VARCHAR(50)
);

CREATE TABLE cuidado_veterinario(
    id_cuidado_veterinario INT PRIMARY KEY AUTO_INCREMENT,
    descricao_cuidado_veterinario VARCHAR(50)
);

CREATE TABLE temperamento(
    id_temperamento INT PRIMARY KEY AUTO_INCREMENT,
    descricao_temperamento VARCHAR(50)
);

CREATE TABLE adaptalidade(
    id_adaptalidade INT PRIMARY KEY AUTO_INCREMENT,
    descricao_adaptalidade VARCHAR(50)
);

CREATE TABLE sociabilidade(
    id_sociabilidade INT PRIMARY KEY AUTO_INCREMENT,
    descricao_sociabilidade VARCHAR(50)
);

-- usuario 1 tem n pets
-- pet 1 tem 1 usuario
CREATE TABLE pet(
    id_pet INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT,
    nome_pet VARCHAR(50),   
    
);

-- pet 1 tem n documentos
-- documento 1 de 1 pet
CREATE TABLE documento_pet(
    id_documento_pet INT PRIMARY KEY AUTO_INCREMENT,
    id_pet INT,
    descricao_documento_pet VARCHAR(50),
    documento_pet VARCHAR(50),
    FOREIGN KEY (id_pet) REFERENCES pet(id_pet)
);


-- tablea que reccebe o pet e suas caracteristicas 1:1
CREATE TABLE caracterstica_pet(
    id_caracteristica_pet INT PRIMARY KEY AUTO_INCREMENT,
    id_pet INT,
    id_sociabilidade INT,
    id_adaptalidade INT,
    id_temperamento INT,
    id_cuidado_veterinario INT,
    cor_olhos_id_cor INT,
    cor_pelagem_id_cor INT,
    id_porte INT,
    id_raca INT,
    id_especie INT,

    FOREIGN KEY (id_pet) REFERENCES pet(id_pet),
    FOREIGN KEY (id_sociabilidade) REFERENCES sociabilidade(id_sociabilidade),
    FOREIGN KEY (id_adaptalidade) REFERENCES adaptalidade(id_adaptalidade),
    FOREIGN KEY (id_temperamento) REFERENCES temperamento(id_temperamento),
    FOREIGN KEY (id_cuidado_veterinario) REFERENCES cuidado_veterinario(id_cuidado_veterinario),
    FOREIGN KEY (cor_olhos_id_cor) REFERENCES cor(id_cor),
    FOREIGN KEY (cor_pelagem_id_cor) REFERENCES cor(id_cor),
    FOREIGN KEY (id_porte) REFERENCES porte(id_porte),
    FOREIGN KEY (id_raca) REFERENCES raca(id_raca),
    FOREIGN KEY (id_especie) REFERENCES especie(id_especie)

);

CREATE TABLE preferencia_usuario(
    id_preferencia_usuario INT PRIMARY KEY,
    id_sociabilidade INT,
    id_adaptalidade INT,
    id_temperamento INT,
    cor_olhos_id_cor INT,
    cor_pelagem_id_cor INT,
    id_porte INT,
    id_raca INT,
    id_especie INT,
    FOREIGN KEY (id_sociabilidade) REFERENCES sociabilidade(id_sociabilidade),
    FOREIGN KEY (id_adaptalidade) REFERENCES adaptalidade(id_adaptalidade),
    FOREIGN KEY (id_temperamento) REFERENCES temperamento(id_temperamento),
    FOREIGN KEY (cor_olhos_id_cor) REFERENCES cor(id_cor),
    FOREIGN KEY (cor_pelagem_id_cor) REFERENCES cor(id_cor),
    FOREIGN KEY (id_porte) REFERENCES porte(id_porte),
    FOREIGN KEY (id_raca) REFERENCES raca(id_raca),
    FOREIGN KEY (id_especie) REFERENCES especie(id_especie)


)

-- pet 1 tem n imagen
-- iemgem 1 tem 1 pet
CREATE TABLE imagem_pet(
    id_imagem_pet INT PRIMARY key AUTO_INCREMENT,
    id_pet INT,
    imagem LONGBLOB,
    FOREIGN KEY (id_pet) REFERENCES pet(id_pet)
);

-- usuario 1 vizualiza n pet_visualizado
-- pet_visualizado 1 visto por n usuarios
CREATE TABLE pet_visualizado(
    id_pet_visualizado INT PRIMARY KEY AUTO_INCREMENT,
    id_pet INT,
    id_usuario INT,
    FOREIGN KEY (id_pet) REFERENCES pet(id_pet)
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

-- usuario 1 curte n pets
-- pet 1 curtido n usuarios
CREATE TABLE pet_curtido(
    id_pet_curtido INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT,
    id_pet INT,
    FOREIGN KEY (id_usuario)REFERENCES usuario(id_usuario),
    FOREIGN KEY (id_pet)REFERENCES pet(id_pet)
);

CREATE TABLE pet_adotado(
    id_pet_adotado INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT,
    id_pet INT,
    FOREIGN KEY (id_usuario)REFERENCES usuario(id_usuario),
    FOREIGN KEY (id_pet)REFERENCES pet(id_pet)
);