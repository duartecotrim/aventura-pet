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
----------------------------------------------------------
CREATE TABLE especie (
    id_especie INT PRIMARY KEY AUTO_INCREMENT,
    nome_especie VARCHAR(50)
);

INSERT INTO especie(id_especie, nome_especie)
VALUES
(1, "CACHORRO"),
(2, "GATO");
----------------------------------------------------------
----------------------------------------------------------
CREATE TABLE raca(
    id_raca INT PRIMARY KEY AUTO_INCREMENT,
    id_especie INT,
    nome_raca VARCHAR(50),
    FOREIGN KEY (id_especie) REFERENCES especie(id_especie)
);

INSERT INTO raca (id_raca, id_especie, nome_raca)
VALUES
 (1, 1, "SEMRAÇADEFINIDA"),
    (2, 1, "AKITA"),
    (3, 1, "BASSET_HOUND"),
    (4, 1, "BEAGLE"),
    (5, 1, "BICHON_FRISE"),
    (6, 1, "BOIADEIRO_AUSTRALIANO"),
    (7, 1, "BORDER_COLLIE"),
    (8, 1, "BOSTON_TERRIER"),
    (9, 1, "BOXER"),
    (10, 1, "BULDOGUE_FRANCES"),
    (11, 1, "BULDOGUE_INGLES"),
    (12, 1, "BULL_TERRIER"),
    (13, 1, "CANE_CORSO"),
    (14, 1, "CAVALIER_KING_CHARLES_SPANIEL"),
    (15, 1, "CHIHUAHUA"),
    (16, 1, "CHOW_CHOW"),
    (17, 1, "COCKER_SPANIEL_INGLES"),
    (18, 1, "DACHSHUND"),
    (19, 1, "DALMATA"),
    (20, 1, "DOBERMAN"),
    (21, 1, "DOGO_ARGENTINO"),
    (22, 1, "DOGUE_ALEMAO"),
    (23, 1, "FILA_BRASILEIRO"),
    (24, 1, "GOLDEN_RETRIEVER"),
    (25, 1, "HUSKY_SIBERIANO"),
    (26, 1, "JACK_RUSSELL_TERRIER"),
    (27, 1, "LABRADOR_RETRIEVER"),
    (28, 1, "LHASA_APSO"),
    (29, 1, "LULU_DA_POMERANIA"),
    (30, 1, "MALTES"),
    (31, 1, "MASTIFF"),
    (32, 1, "PASTOR_ALEMAO"),
    (33, 1, "PASTOR_BELO_HORIZONTINO"),
    (34, 1, "PASTOR_BRANCO_SUICO"),
    (35, 1, "PASTOR_BULLDOG_INGLES"),
    (36, 1, "PASTOR_CANAAN"),
    (37, 1, "PASTOR_COLLIE"),
    (38, 1, "PASTOR_DE_SHETLAND"),
    (39, 1, "PEQUINES"),
    (40, 1, "PINSCHER"),
    (41, 1, "PITBULL"),
    (42, 1, "POODLE"),
    (43, 1, "PUG"),
    (44, 1, "ROTTWEILER"),
    (45, 1, "SAMOYEDO"),
    (46, 1, "SCHNAUZER"),
    (47, 1, "SHIBA_INU"),
    (48, 1, "SHIH_TZU"),
    (49, 1, "SPITZ_ALEMAO"),
    (50, 1, "STAFFORDSHIRE"),
    (51, 1, "WEIMARANER"),
    (52, 1, "YORKSHIRE"),
    (53, 1, "OUTROS"),
    (54, 2, "SEMRAÇADEFINIDA"),
    (55, 2, "ABISSINIO"),
    (56, 2, "ANGORA"),
    (57, 2, "BALINES"),
    (58, 2, "BENGAL"),
    (59, 2, "BOBTAIL_AMERICANO"),
    (60, 2, "BOBTAIL_JAPONES"),
    (61, 2, "BOMBAY"),
    (62, 2, "BURMES"),
    (63, 2, "BURMES_VERMELHO"),
    (64, 2, "CHARTREUX"),
    (65, 2, "COLORPOINT_DE_PELO_CURTO"),
    (66, 2, "CORNISH_REX"),
    (67, 2, "CURL_AMERICANO"),
    (68, 2, "DEVON_REX"),
    (69, 2, "HIMALAIO"),
    (70, 2, "JAGUATIRICA"),
    (71, 2, "JAVANES"),
    (72, 2, "KORAT"),
    (73, 2, "LAPERM"),
    (74, 2, "MAINE_COON"),
    (75, 2, "MANX"),
    (76, 2, "CYMRIC"),
    (77, 2, "MAU_EGIPCIO"),
    (78, 2, "MIST_AUSTRALIANO"),
    (79, 2, "MUNCHKIN"),
    (80, 2, "NORUEGUES_DA_FLORESTA"),
    (81, 2, "PELO_CURTO_AMERICANO"),
    (82, 2, "PELO_CURTO_BRASILEIRO"),
    (83, 2, "PELO_CURTO_EUROPEU"),
    (84, 2, "PELO_CURTO_INGLES"),
    (85, 2, "PERSA"),
    (86, 2, "PIXIE_BOB"),
    (87, 2, "RAGDOLL"),
    (88, 2, "OCICAT"),
    (89, 2, "RUSSO_AZUL"),
    (90, 2, "SAGRADO_DA_BIRMANIA"),
    (91, 2, "SAVANNAH"),
    (92, 2, "SCOTTISH_FOLD"),
    (93, 2, "SELKIRK_REX"),
    (94, 2, "SIAMES"),
    (95, 2, "SIBERIANO"),
    (96, 2, "SINGAPURA"),
    (97, 2, "SOMALI"),
    (98, 2, "SPHYNX"),
    (99, 2, "THAI"),
    (100, 2, "TONQUINES"),
    (101, 2, "TOYGER"),
    (102, 2, "USURI"),
    (103, 2, "OTHER");

----------------------------------------------------------
CREATE TABLE porte(
    id_porte INT PRIMARY KEY AUTO_INCREMENT,
    nome_porte VARCHAR(50)
);

INSERT INTO porte(id_porte, nome_porte)
VALUES
(1, "PEQUENO"),
(2, "MEDIO"),
(3, "GRANDE")
----------------------------------------------------------

----------------------------------------------------------
--TABELA COR
CREATE TABLE cor(
    id_cor INT PRIMARY KEY AUTO_INCREMENT,
    nome_cor VARCHAR(50)
);
-- DADOS DE COR
INSERT INTO cor (id_cor, nome_cor) 
VALUES
(1, "ESCURO"),
(2, "AZUL"),
(3, "AMARELO"),
(4, "MARROM"),
(5, "BRANCO"),
(6, "CINZA"),
(7, "PRETO"),
(8, "LARANJA"),
(9, "CARAMELO"),
(10,"UM DE CADA COR"),
(11, "OUTRA COR;");
----------------------------------------------------------

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

----------------------------------------------------------
-- TABELA IDADE
CREATE TABLE idade (
    id_idade INT PRIMARY KEY AUTO_INCREMENT,
    desc_idade VARCHAR(50)
);
-- DADOS PARA TABELA IDADE
INSERT INTO idade (id_idade, desc_idade)
VALUES 
(1, "FILHOTE"),
(2, "ADULTO"),
(3, "SENIOR")
----------------------------------------------------------


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
    genero BOOLEAN,
    id_idade INT,

    FOREIGN KEY (id_pet) REFERENCES pet(id_pet),
    FOREIGN KEY (id_sociabilidade) REFERENCES sociabilidade(id_sociabilidade),
    FOREIGN KEY (id_adaptalidade) REFERENCES adaptalidade(id_adaptalidade),
    FOREIGN KEY (id_temperamento) REFERENCES temperamento(id_temperamento),
    FOREIGN KEY (id_cuidado_veterinario) REFERENCES cuidado_veterinario(id_cuidado_veterinario),
    FOREIGN KEY (cor_olhos_id_cor) REFERENCES cor(id_cor),
    FOREIGN KEY (cor_pelagem_id_cor) REFERENCES cor(id_cor),
    FOREIGN KEY (id_porte) REFERENCES porte(id_porte),
    FOREIGN KEY (id_raca) REFERENCES raca(id_raca),
    FOREIGN KEY (id_especie) REFERENCES especie(id_especie),
    FOREIGN KEY (id_idade) REFERENCES idade(id_idade)

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
    genero BOOLEAN,
    id_idade INT,
    FOREIGN KEY (id_sociabilidade) REFERENCES sociabilidade(id_sociabilidade),
    FOREIGN KEY (id_adaptalidade) REFERENCES adaptalidade(id_adaptalidade),
    FOREIGN KEY (id_temperamento) REFERENCES temperamento(id_temperamento),
    FOREIGN KEY (cor_olhos_id_cor) REFERENCES cor(id_cor),
    FOREIGN KEY (cor_pelagem_id_cor) REFERENCES cor(id_cor),
    FOREIGN KEY (id_porte) REFERENCES porte(id_porte),
    FOREIGN KEY (id_raca) REFERENCES raca(id_raca),
    FOREIGN KEY (id_especie) REFERENCES especie(id_especie),
     FOREIGN KEY (id_idade) REFERENCES idade(id_idade)


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