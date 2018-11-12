 var displayBuffer = '';
 var operand1 = 0;
 var operand2 = 0;
 var operationResult = 0;
 var myOperation = '';
 var operationHistory = '';
 var buttonClickCount = 0;

 function clearAll(){
   operand1 = 0;
   myOperation = '';
   displayBuffer = '';
   operationHistory = '';
   $('#display').val(operationResult);
   buttonClickCount = 0;
 }

 function equalsButton(pushedEqual){
   operationHistory = operationHistory + '=';

     $('#output').html(operationHistory);

     if(/_=$/.test(operationHistory) != true){
       operationHistory = '=';
       $('#output').html(operationHistory);

       if(myOperation == ''){
         operationResult = Number( $('#display').val() );
         $('#display').val(operationResult);
       }

       if(myOperation == 'summation'){
           operationResult = operand1 + Number( $('#display').val() );
       }

       if(myOperation == 'substraction'){
           operationResult = operand1 - Number( $('#display').val() );
       }

       if(myOperation == 'multiplication'){
         operationResult = operand1 * Number( $('#display').val() );
       }

       if(myOperation == 'division'){
         if($('#display').val() == 0){
           operationResult = "Infinity";
         }
         else{
           operationResult = operand1 / Number( $('#display').val() );
         }
       }

       clearAll();
     }

 }

 $('.numberButton').click(function(){
    operationHistory = operationHistory + 'n';
     displayBuffer = displayBuffer + $(this).val();
     $('#display').val( displayBuffer );
     $('#output').html(operationHistory);
 });




 $('#addButton').click(function(){
   buttonClickCount++;

   if(myOperation == '' || myOperation == 'summation'){
    if(buttonClickCount == 1) operationResult = 0;
     operationResult = operationResult + Number( $('#display').val() ); //this performs continuous ops
     myOperation = 'summation';
     displayBuffer = '';
     $('#display').val(operationResult);
     operand1 = Number($('#display').val());//this will take operand for next operation
     operationHistory = operationHistory + '_';
     $('#output').html(operationHistory);
  }else{
    operand1 = operationResult;
    equalsButton();
    operand1 = operationResult;
    myOperation = 'summation';
  }


 });

   $('#subtractButton').click( function(){
   buttonClickCount++;
   if(myOperation == '' || myOperation == 'substraction'){
    if(buttonClickCount == 1) operationResult = 0;
     if(buttonClickCount == 1){
       operationResult =  Number( $('#display').val() ) - operationResult;
     }
     else{
       operationResult = operationResult - Number( $('#display').val() );
     }
     myOperation = 'substraction';
     displayBuffer = '';
     $('#display').val(operationResult);
     operand1 = Number($('#display').val());//this will take operand for next operation
     operationHistory = operationHistory + '_';
     $('#output').html(operationHistory);

   }else{

    operand1 = operationResult;
    equalsButton();
    operand1 = operationResult;
    myOperation = 'substraction';

   }

 });


 $('#multiplyButton').click(function(){
   buttonClickCount++;
   if(myOperation == '' || myOperation == 'multiplication'){
     if(buttonClickCount == 1){
       operationResult = 1;
     }
     operationResult = operationResult * Number( $('#display').val() );
     myOperation = 'multiplication';
     displayBuffer = '';
     $('#display').val(operationResult);
     operand1 = Number($('#display').val());
     operationHistory = operationHistory + '_';
     $('#output').html(operationHistory);
  }else{
    operand1 = operationResult;
    equalsButton();
    operand1 = operationResult;
    myOperation = 'multiplication';
  }

 });


 $('#divideButton').click(function(){

   buttonClickCount++;

  if(myOperation == '' || myOperation == 'division'){
    if(buttonClickCount == 1){
       operationResult = Number( $('#display').val() );
     }
     else{
     operationResult = operationResult / Number( $('#display').val() );
     }

     myOperation = 'division';
     displayBuffer = '';
     $('#display').val(operationResult);

     operand1 = Number($('#display').val());

     operationHistory = operationHistory + '/_';
     $('#output').html(operationHistory);
  }
  else{
    operand1 = operationResult;
    equalsButton();
    operand1 = operationResult;
    myOperation = 'division';
  }

 });


$('#equalsButton').click(function(){
  equalsButton(true);
});

$('#clearButton').click(function(){
  myOperation = '';
  operationResult = 0;
  displayBuffer = '';
  operand1 = 0;
  operationHistory = '';
  $('#display').val('');
});
