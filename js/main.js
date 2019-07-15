var container=document.createElement('div');
container.id='container';

var script = document.querySelector('body script');
document.body.insertBefore(container, script);

var containerNode = document.getElementById('container');

var keyword=document.createElement('div');
keyword.id='keyword';
containerNode.appendChild(keyword);

var gibbet=document.createElement('div');
gibbet.id='gibbet';
containerNode.appendChild(gibbet);

var alphabet=document.createElement('div');
alphabet.id='alphabet';
containerNode.appendChild(alphabet);

var passwordPicker=document.createElement('div');
passwordPicker.id='userPasswordPicker';
containerNode.appendChild(passwordPicker);

var passwordPickerNode=document.getElementById('userPasswordPicker');

var input=document.createElement('input');
input.type='text';
input.id='userPassword';
input.placeholder='Wpisz swoje hasło...';
passwordPickerNode.appendChild(input);

var confirmPassButt=document.createElement('div');
confirmPassButt.id='confirmPass';
confirmPassButt.className='passwordButton';
confirmPassButt.appendChild(document.createTextNode('Zatwierdź'));
passwordPickerNode.appendChild(confirmPassButt);

var randomPassButt=document.createElement('div');
randomPassButt.id='randomPass';
randomPassButt.className='passwordButton';
randomPassButt.appendChild(document.createTextNode('Losuj hasło'));
passwordPickerNode.appendChild(randomPassButt);

var player=document.createElement('div');
player.id='player';
containerNode.appendChild(player);

var playerNode=document.getElementById('player');

var playIcon=document.createElement('i');
playIcon.className='icon-play';
playIcon.id='playButt';

var pauseIcon=document.createElement('i');
pauseIcon.id='pauseButt';
pauseIcon.className='icon-pause';

var stopIcon=document.createElement('i');
stopIcon.id='stopButt';
stopIcon.className='icon-stop';

playerNode.appendChild(playIcon);
playerNode.appendChild(pauseIcon);
playerNode.appendChild(stopIcon);
