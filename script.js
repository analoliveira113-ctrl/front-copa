// Exemplo prático de escuta em tempo real no Front-end:
const postLikesSubscription = supabase
  .channel('mudancas-no-feed')
  .on('postgres_changes', { event: '*', scheme: 'public', table: 'likes' }, payload => {
    console.log('Uma curtida foi adicionada ou removida em tempo real!', payload);
    // Aqui você atualiza o estado do seu feed sem precisar dar F5 na página
  })
  .subscribe();