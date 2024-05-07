<script>
  import { supabase } from '$lib/supabaseClient.js';
    export let data;

    function handleDelete() {
    const checkedIds = []; // 체크된 공지 항목의 ID를 저장할 배열
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked'); // 체크된 체크박스들을 선택

    checkboxes.forEach(checkbox => {
      checkedIds.push(checkbox.value); // 체크된 체크박스의 값을 배열에 추가
    });

    checkedIds.forEach(id => {
      deleteNotice(id); // 각 체크된 공지 항목을 삭제
    });
  }


 const deleteNotice= async(id)=> {
    try {
      const { error } = await supabase.from('notice').delete().eq('id', id);
      if (error) {
        throw error;
      }
      console.log('Notice deleted successfully');
    //   window.location.reload();
    } catch (error) {
      console.error('Error deleting notice:', error.message);
    }
  }

  
  </script>

<h1>Notice_Board</h1>

<div>
    {#each data.data as notice}
      <div>
        <input type="checkbox" value={notice.id} />

        {notice.name} {notice.content}
        
    </div>
    {/each}
    <button on:click={handleDelete}>삭제</button>
  </div>