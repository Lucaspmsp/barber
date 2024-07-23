AOS.init();



<script>
document.addEventListener('DOMContentLoaded', function() {
    var comprarProdutoLink = document.getElementById('comprar-produto');
    
    if (comprarProdutoLink) {
        comprarProdutoLink.addEventListener('click', function(event) {
            // Coloque aqui o código de rastreamento do Facebook
            fbq('track', 'InitiateCheckout');
            
            // Certifique-se de que o link seja seguido após o rastreamento
            // Aqui, cancelamos o comportamento padrão do link para este exemplo
            event.preventDefault();
            
            // Você pode redirecionar o usuário para o URL real depois do rastreamento
            // window.location.href = comprarProdutoLink.href;
        });
    }
});
</script>
