<script>
document.addEventListener('DOMContentLoaded', function() {
    var comprarProdutoLink = document.getElementById('comprar-produto');
    
    if (comprarProdutoLink) {
        comprarProdutoLink.addEventListener('click', function(event) {
            // Rastreamento do Facebook Pixel
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '849237046336907');
            fbq('track', 'InitiateCheckout');
            
            // Pode-se redirecionar o usuário para o URL real após o rastreamento
            // window.location.href = comprarProdutoLink.href;

            // Prevenir o comportamento padrão do link
            event.preventDefault();
        });
    }
});
</script>
