
      /*========= first slide =========*/
    
      document.addEventListener('DOMContentLoaded', function() {
        var stream = document.querySelector('.gallery__stream.s1');
        var items = document.querySelectorAll('.gallery__item.s1');
    
        var prev = document.querySelector('.gallery__prev.s1');
        prev.addEventListener('click', function() {
          stream.insertBefore(items[items.length - 1], items[0]);
          items = document.querySelectorAll('.gallery__item.s1');
        });
    
        var next = document.querySelector('.gallery__next.s1');
        next.addEventListener('click', function() {
          stream.appendChild(items[0]);
          items = document.querySelectorAll('.gallery__item.s1');
        });
      });
    
      var cont = 1
      document.querySelector(".next").addEventListener("click", ()=> {
        cont++
        check()
      });
      document.querySelector(".prev").addEventListener("click", ()=> {
        cont--
        check()
      });
    
      function check() {
        switch (cont) {
          case 1:
            document.querySelector(".part_one").style.marginLeft = "0";
            document.querySelector(".prev").style.display = "none";
            document.querySelector(".speech ").innerHTML = "Envie-nos algumas informações necessárias para se tornar um tutor, e ajude milhares de estudantes de escolas públicas. <br> maiores, magni dolorum aliquam.";
            break;
          case 2:
            document.querySelector(".part_one").style.marginLeft = "-100%";
            document.querySelector(".prev").style.display = "inline-block";
            document.querySelector(".speech ").innerHTML = "Digite seu sobrenome, assim poderemos fornecer um atendimento personalizado.";
            break;
          case 3:
            document.querySelector(".part_one").style.marginLeft = "-200%";
            document.querySelector(".next").style.display = "inline-block";
            document.querySelector(".submit").style.display = "none";
            document.querySelector(".speech ").innerHTML = "Digite seu e-mail, assim poderemos entrar em contato e vice-versa.";
            break;
          case 4:
            document.querySelector(".part_one").style.marginLeft = "-300%";
            document.querySelector(".speech ").innerHTML = "Digite seu telefone para que possamos entrar em contato mais rapidamente.";
            break;
          case 5:
            document.querySelector(".part_one").style.marginLeft = "-400%";
            document.querySelector(".speech ").innerHTML = "Digite seu RG para que possamos anexar ao seu perfil.";
            document.querySelector(".next").style.display = "inline-block";
            document.querySelector(".submit").style.display = "none";
            break;
          case 6:
            document.querySelector(".part_one").style.marginLeft = "-500%";
            document.querySelector(".speech ").innerHTML = "Digite seu CPF para que possamos anexar ao seu perfil.";
            document.querySelector(".next").style.display = "none";
            document.querySelector(".submit").style.display = "inline-block";
            break;
    
          default:
            document.querySelector(".part_one").style.marginLeft = "0";
            cont = 1;
            document.querySelector(".speech ").innerHTML = "Envie-nos algumas informações necessárias para se tornar um tutor, e ajude milhares de estudantes de escolas públicas. <br> maiores, magni dolorum aliquam.";
          }
        }