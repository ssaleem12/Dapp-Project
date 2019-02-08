if (typeof web3 !== 'undefined') {
  web3Provider = web3.currentProvider;
} else {
  // If no injected web3 instance is detected, fall back to Geth
  web3Provider = new Web3.providers.HttpProvider("http://localhost:9545");
}
web3 = new Web3(web3Provider);

Quiz_Contract = web3.eth.contract([
  {
    "constant": false,
    "inputs": [
      {
        "name": "_name",
        "type": "string"
      },
      {
        "name": "_addr",
        "type": "address"
      }
    ],
    "name": "AddPlayer",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_quest",
        "type": "string"
      },
      {
        "name": "ans1",
        "type": "string"
      },
      {
        "name": "ans2",
        "type": "string"
      },
      {
        "name": "ans3",
        "type": "string"
      },
      {
        "name": "right",
        "type": "uint256"
      }
    ],
    "name": "Create_Question",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "getAns1",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "getAns2",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "getAns3",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "getLevel",
    "outputs": [
      {
        "name": "",
        "type": "int256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "getName",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "getPlayer",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "getQuestion",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "getQuestionNum",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "getRightAns",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      },
      {
        "name": "choice_right",
        "type": "uint256"
      }
    ],
    "name": "Verification",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "addr",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "name",
        "type": "string"
      }
    ],
    "name": "new_Player",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "quest",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "new_Question",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "right_Answer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "wrong_Answer",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "player_list",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]);

contractInstance = Quiz_Contract.at("0x97f8290FF258459a34CF09b9f2731ef5d0A0ede8");

	function check_Answer(){
		var quesNum = localStorage.getItem("QuestionNumber");
		var res = false;
	
    contractInstance.getRightAns(quesNum,function(result,error){
      if(!error){
        if (result = 0 && document.getElementById("rep1").checked == true	){res = true;}

  		  if (result == 1 && document.getElementById("rep2").checked == true	){res = true;}	

        if (result == 2 && document.getElementById("rep3").checked == true	){res = true;}				  
  	  }
      else{console.log(error);}});

  	 localStorage.setItem("result", res);
	}

  function AddQuestion() {

	 quest =$("#new_Question").val();
	 ans1 =$("#respond1").val();
	 ans2 =$("#respond2").val();
	 ans3 =$("#respond3").val();

	contractInstance.Create_Question(quest.toString(),ans1.toString(),ans2.toString(),ans3.toString(),2,function(error,result){
		
    if(!error){
      $("#CallBack").append("Question is successfully added!")
    }
		else{
      $("#CallBack").append("Question is not added. Please be sure you have level to add the question.");
    }
		});
  }

$(document).ready(function() {
	//Display Player Address
	var add = contractInstance.getPlayer.call(function(error,result){
		
    if(!error){
      $("#Addr").append("Your address is : "+ result);
    }
    else{
      console.log(error);
    }	
	});
	//Display question number
	 contractInstance.getQuestionNum.call(function(error,result){
		 
	   if(!error){
      $("#questionNum").append("There are "+ result + " questions now");
	   
	   }else{
		   console.log(error);
		   }
	 });
	//Display questions 
	var correct = true;
	var quesNum = 0;
	
  
	{    
		localStorage.setItem("QuestionNumber", quesNum);
    console.log ("about to call ", contractInstance.address);
		contractInstance.getQuestion(quesNum,function(result,error){

			if(!error){ 
        $("#question").append(": "+"  <strong>" +result+"</strong>");
      }
		else{
      console.log(error);
    }
  });

		contractInstance.getAns1(quesNum,function(result,error){
			if(!error){$("#rep1").append("<strong>" +result +"</strong>");
    }
		else{
      console.log(error);
    }
  });
		contractInstance.getAns2(quesNum,function(result,error){
			if(!error){$("#rep2").append("<strong>" +result +"</strong>");
    }
		else{
      console.log(error);
    }
  });
		contractInstance.getAns3(quesNum,function(result,error){
			if(!error){$("#rep3").append("<strong>" +result +"</strong>");
    }
		else{
      console.log(error);
    }
  });
		result = localStorage.getItem("result");

		if(result == true){ 
      alert("Awesome"); correct = true; quesNum =+ 1;
    }
		if(result == false){
     alert("Sorry, Keep going!"); correct = false; quesNum = 0; location.reload();
   }
		//verify if the palyer has finished all the questions
	    contractInstance.getQuestionNum.call(function(error,result){ 
	      
        if(!error){
          if (result == quesNum){
            alert("You finished all the questions! Keep playing to add more questions!");
          };
	   }
     else{
		   console.log(error);
		   }
	 });
	}	
	}
	);