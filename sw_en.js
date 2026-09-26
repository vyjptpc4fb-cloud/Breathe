// Compatibilidade: quem já tinha o app em inglês instalado registrou este
// arquivo como service worker. Ele agora só existe para que o navegador
// detecte a mudança de conteúdo e migre para o service worker único
// (sw.js), que passa a cuidar de todo o cache, incluindo o app unificado.
importScripts('./sw.js');
