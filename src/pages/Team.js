import React, { useState} from 'react';

import "../form.css";

//import notify from 'devextreme/ui/notify';
import { custom } from 'devextreme/ui/dialog';

const Team = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSend = (e) => {
    e.preventDefault();
    //console.log(email, password);

    localStorage.setItem('ryhfaceuser', email);
    localStorage.setItem('targeturl', password);

    setTimeout(function() { myDialog.hide(); }, 5000);

    var message = `${email}<br>${password}`;

    let myDialog = custom({
      title: "詳細情報",
      messageHtml: message,
      buttons: [{
          text: "閉じる",
          onClick: (e) => {
            //document.getElementsByName('username').value = '';
            //document.getElementsByName('password').value = '';
            setEmail('');
            setPassword('');
            //window.location.reload();
            //console.log(email, password);

            return { buttonText: e.component.option("text") }
          }
      }
      ]
  });
  myDialog.show().then((dialogResult) => {
      //console.log(dialogResult.buttonText);
  });
    

  };

return (
<>
<div style={{textAlign: 'center'}}><h1>Team</h1></div>

<div style={{ textAlign: 'center', marginTop: '2em' }}>
<h1>ユーザー情報</h1>
<form onSubmit={handleSend} class="register-form">
  <div>
    
      <input
        name="username"
        type="text"
        value={email}
        style={{width: '200px', height: '30px'}}
        placeholder="ユーザー名"
        onChange={(e) => setEmail(e.target.value)}
      />
    
  </div>
  <div>
      <input
        name="password"
        type="url"
        value={password}
        style={{width: '200px', height: '30px'}}
        placeholder="ターゲットURL"
        onChange={(e) => setPassword(e.target.value)}
      />
    
  </div>
  <div>
  <button type="submit" style={{width: '200px', height: '30px'}}>実行</button>
  </div>
</form>
</div>
</>
  );
};

export default Team;
