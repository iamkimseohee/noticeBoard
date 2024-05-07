<script>
  import { supabase } from "$lib/supabaseClient";
  import moment from "moment";

  
  
  let notices = [];
  let name = '';
  let content = '';

  


  async function handleSubmit() {
    
    try {
  const now = moment().format("YYYY.MM.DD HH:mm"); //현재 시간

      const { data, error } = await supabase.from('notice').insert([{ name, content, now:now }]);
      if (error) {
        throw error;
      }
      console.log('Notice added successfully:', data);
   
      name = '';
      content = '';
    } catch (error) {
      console.error('Error adding notice:', error.message);
    }
  }
</script>

<h1>📜</h1>

<div>
  <form on:submit|preventDefault="{handleSubmit}">
    <p>이름</p>
    <input type="text" bind:value="{name}">
    <p>내용</p>
    <input type="text" bind:value="{content}">
    <button type="submit">제출</button>
  </form>
</div>

