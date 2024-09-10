// array de objetos
let usuarios = JSON.parse(localStorage.getItem('users')) || [];

// Selecionar elementos do DOM
const formUsuario = document.getElementById('userForm');
const userTableBody = document.querySelector('#userTable tbody');
const container = document.querySelector('.container');

let editIndex = null; // Variável para armazenar o índice do usuário que está sendo editado

// Função para listar os usuários na tabela ou como cards
const listUsers = () => {
    // Limpar a tabela e os cards antes de adicionar novos dados
    userTableBody.innerHTML = '';
    document.querySelectorAll('.user-card').forEach(card => card.remove());

    usuarios.forEach((user, index) => {
        // Verificar se a tela é pequena para exibir cards
        if (window.innerWidth <= 768) {
            const card = document.createElement('div');
            card.classList.add('user-card');

            card.innerHTML = `
                <h3>${user.name}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Telefone:</strong> ${user.phone}</p>
                <p><strong>Senha:</strong> ${user.password}</p>
                <div class="actions">
                    <button class="edit-btn" onclick="editUser(${index})">Editar</button>
                    <button class="delete-btn" onclick="deleteUser(${index})">Excluir</button>
                </div>
            `;

            container.appendChild(card);
        } else {
            // Exibir como tabela para telas grandes
            const tr = document.createElement('tr');

            tr.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.password}</td>
                <td class="actions">
                    <button class="edit-btn" onclick="editUser(${index})">Editar</button>
                    <button class="delete-btn" onclick="deleteUser(${index})">Excluir</button>
                </td>
            `;

            userTableBody.appendChild(tr);
        }
    });
};

// Ajustar a exibição quando a tela for redimensionada
window.addEventListener('resize', listUsers);

// Função para editar um usuário
const editUser = (index) => {
    // Preencher o formulário com os dados do usuário selecionado
    const user = usuarios[index];
    document.getElementById('name').value = user.name;
    document.getElementById('email').value = user.email;
    document.getElementById('phone').value = user.phone;
    document.getElementById('password').value = user.password;

    editIndex = index; // Armazenar o índice do usuário que está sendo editado
};

// Função para deletar um usuário
const deleteUser = (index) => {
    usuarios.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(usuarios));
    listUsers(); // Atualizar a tabela ou os cards após exclusão
};

// Adicionar ou atualizar um usuário e salvar no localStorage
formUsuario.addEventListener('submit', (event) => {
    event.preventDefault();

    const entries = new FormData(event.target).entries();
    const data = Object.fromEntries(entries);

    if (editIndex !== null) {
        // Se editIndex não for nulo, estamos editando um usuário existente
        usuarios[editIndex] = data;
        editIndex = null; // Resetar o índice de edição
    } else {
        // Caso contrário, estamos adicionando um novo usuário
        usuarios.push(data);
    }

    // Limpar o formulário
    event.target.reset();

    // Atualizar o localStorage
    localStorage.setItem('users', JSON.stringify(usuarios));

    // Atualizar a lista de usuários na tabela ou cards
    listUsers();
});

// Inicializar a tabela ou cards ao carregar a página
document.addEventListener('DOMContentLoaded', listUsers);
