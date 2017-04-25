/**
 * @function isMobile
 * detecta se o useragent e um dispositivo mobile
 */
window.onload = function() {
    
    var userAgent = navigator.userAgent.toLowerCase();
    if(userAgent.search(/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i)!= -1 ) {
        
        divContato.innerHTML = '<form method="post" action="#"><div class="row"><div class="6u 12u$(mobile)">Telefone para Contato : <input type="text" name="name" value="(83) 3532-4184" disabled /></div><div class="6u$ 12u$(mobile)">Email para Contato :<input type="text" name="email" value="diogo.moreira@ifpb.edu.br"  disabled /></div><div class="6u$ 12u$(mobile)">Email da Coordenação :<input type="text" name="email" value="cads.cz@ifpb.edu.br"  disabled /></div><br/><br/><ul  class="icons"><li>Nos encontre também em nossa pagina : </li><li><a href="https://www.facebook.com/ifpbcazajeiras/" class="skel-layers-ignoreHref"><span class="icon fa-facebook"></span></a></li></ul><br/><br/></div></form>';
        
    } else {
        
        divContato.innerHTML = "<form method='post' action='#'><div class='row'><div class='6u 12u$(mobile)'>Telefone para Contato : <input type='text' name='name' value='(83) 3532-4184' disabled /></div><div class='6u$ 12u$(mobile)'>Email para Contato :<input type='text' name='email' value='diogo.moreira@ifpb.edu.br'  disabled /></div><!-- Div usada para não quebrar layout do template --><div class='6u 12u$(mobile)' style='visibility: hidden;'>Div para não quebrar layout : <input type='text' name='' value='' disabled /></div><!-- Fim da div de correção do layout --><div class='6u$ 12u$(mobile)'>Email da Coordenação :<input type='text' name='email' value='cads.cz@ifpb.edu.br'  disabled /></div><br/><br/><ul  class='icons'><li>Nos encontre também em nossa pagina : </li><li><a href='https://www.facebook.com/ifpbcazajeiras/' class='skel-layers-ignoreHref'><span class='icon fa-facebook'></span></a></li></ul><br/><br/></div></form>";
        
    }
}