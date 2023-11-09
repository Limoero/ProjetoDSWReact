create database lojadsw;
use lojadsw;


/* CRIAR TABELA DE PRODUTOS */
create table tb_produto(
	id_produto	int primary key auto_increment,
    nome_produto varchar(255) not null,
    desc_produto varchar(255) ,
    quantidade_produto int not null,
    preco_produto double not null,
    foto_produto blob
    
);

/* CRIAR TABELA DE USUÁRIOS */
create table tb_administrador(
id_adm int primary key auto_increment,
adm_email varchar(255),
adm_usuario varchar(255),
adm_senha int(255)
);
 /* CRUD PRODUTO */
 INSERT INTO tb_produto(
nome_produto,
desc_produto,
quantidade_produto,
imagem_produto
) 
 values(
 ?,?,?,?
 );
 
 select * from tb_produto;
 
 update tb_produto
 set nome_produto = ?,
	 desc_produto = ?,
     quantidade_produto = ?,
     imagem_produto = ?
where id_produto = ?;

delete from tb_produto where id_produto = ?;

/* CRUD ADM LOGIN */
 INSERT INTO tb_administrador(
adm_email,
adm_usuario,
adm_senha
) 
 values(
 ?,?,?
 );
 
 select * from tb_administrador;
 
update tb_administrador
set	adm_email = ?,
    adm_usuario = ?,
    adm_senha = ?
where id_adm = ?;

delete from tb_administrador where id_adm = ?;
 