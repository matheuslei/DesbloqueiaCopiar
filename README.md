# Desbloqueio de Conteúdo HTML para Copiar

## Introdução

Este projeto visa fornecer uma solução simples para desbloquear o bloqueio de copiar conteúdo em páginas HTML. Frequentemente, os desenvolvedores web implementam bloqueios para impedir a cópia de conteúdo, o que pode ser inconveniente para usuários que precisam copiar informações legítimas. Este projeto oferece um script JavaScript que remove esses bloqueios de forma eficiente.

## Funcionalidades

- **Remoção de Event Listeners:** O script remove event listeners que bloqueiam ações de copiar, colar, cortar, abrir o menu de contexto, selecionar texto e iniciar arraste.
- **Alteração de Estilos CSS:** Adiciona uma regra CSS global para permitir a seleção de texto, mesmo que esteja bloqueada via CSS.
- **Resistência a Scripts:** O script adiciona um event listener `load` para garantir que bloqueios reinstalados após o carregamento da página sejam removidos.

## Código

Aqui está o código JavaScript utilizado para desbloquear o conteúdo:

```javascript
// Remove event listeners
document.querySelectorAll('*').forEach((element) => {
    element.oncopy = null;
    element.oncut = null;
    element.onpaste = null;
    element.oncontextmenu = null;
    element.onselectstart = null;
    element.ondragstart = null;
});

// Remove CSS properties that prevent text selection and copying
const style = document.createElement('style');
style.innerHTML = `
    * {
        user-select: text !important;
        -webkit-user-select: text !important;
        -moz-user-select: text !important;
        -ms-user-select: text !important;
    }
`;
document.head.appendChild(style);

// Override possible existing JavaScript that resets the handlers
window.addEventListener('load', () => {
    document.querySelectorAll('*').forEach((element) => {
        element.oncopy = null;
        element.oncut = null;
        element.onpaste = null;
        element.oncontextmenu = null;
        element.onselectstart = null;
        element.ondragstart = null;
    });
});
```

## Como Usar

1. **Abra a Página Bloqueada:** Abra no seu navegador a página da web que possui o bloqueio de copiar conteúdo.
2. **Acesse o Console do Navegador:** Pressione `F12` (ou `Ctrl+Shift+I` no Windows/Linux ou `Cmd+Option+I` no Mac) para abrir as ferramentas de desenvolvedor e vá para a aba "Console".
3. **Cole e Execute o Código:** Copie o código acima e cole no console, depois pressione `Enter`.

## Contribuições

Sinta-se à vontade para contribuir com melhorias para este projeto. Para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -am 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
