/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Numbers() {
    this.numCorrect = 0;
    this.number = [];
    var numText = ['null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn'];
            var ulText = $('#numName');
            var ulNum = $('#numNumeric');
            var dimx = $('body').width();
            var dimy = $('body').height();
            var numbersCookie = Cookies.getJSON('numbers');
            if (numbersCookie === null) {
                for (var i = 0; i < number.length; i++) {
                    var number = {
                        word: numText[i],
                        digit: i,
                        score: 0,
                        placed : false
                    };
                    numbers.push(number);
                }
            } else {
                numbers = numbersCookie;
            }
            var hidden = 0;
            for (var i = 0; i < numbers.length; i++) {
                ulText.append('<li id="t' + numbers[i].digit + '">' + numbers[i].word + '</li>');
                ulNum.append('<li id="n' + numbers[i].digit + '">' + numbers[i].digit + '</li>');
                if(numbers[i].placed){
                    $("#n" + i).hide();
                    hidden++;
                }
            }

function Numbers(cookie) {
   var left = Math.floor((Math.random() * (dimx - 20)) + 10);
                        var top = Math.floor((Math.random() * (dimy - 20)) + 10);
                        niElem.css("left", left + "px");
                        niElem.css("top", top + "px");
                        numbers[niElem.data("index").index].score++;
                        var score = numbers[niElem.data("index").index].score
                        if (score > 1)
                            alert("Come on. Try harder. You were mistaken " + score + " times");
                    }
                    Cookies.set('numbers', numbers, {expires: 128});
                }

function Number(word,digit,errorNum,placed) {
    this.word = word;
    this.digit = digit;
    this.errorNum = errorNum;
    this.placed = placed;
    $.fn.randomize = function (selector) {
                var $elems = selector ? $(this).find(selector) : $(this).children(),
                        $parents = $elems.parent();
                $parents.each(function () {
                    $(this).children(selector).sort(function () {
                        return Math.round(Math.random()) - 0.5;
                    }).detach().appendTo(this);
                });
                return this;
            };
            $('ul').randomize();
    
    
    
    
    }


