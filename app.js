const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const titleEl = document.querySelector('.title');
const descrEl = document.querySelector('.description');

link.forEach(el => {
  el.addEventListener('click', () => {
    langEl.querySelector('.active').classList.remove('active');
    el.classList.add('active');

    const attr = el.getAttribute('language');

    titleEl.textContent = data[attr].title;
    descrEl.textContent = data[attr].description;
  });
});

var data = {
    "english": 
    {
      "title": "lange convert",
      "description": 
        "Programming is the process of writing instructions and directing commands to a computer or any other device such as DVD readers or audio and video receivers in modern communication systems, to direct this device and inform it how to deal with data or how to perform a series of required actions called an algorithm. The programming process follows rules specific to the language chosen by the programmer. Each programming language has its own characteristics that distinguish it from the other and make it suitable to varying degrees for each type of program and according to the task required of this program."
    },
    "arabic": 
    {
      "title": "arabic",
      "description": 
        "البرمجة هي عملية كتابة التعليمات وتوجيه الأوامر إلى جهاز كمبيوتر أو أي جهاز آخر مثل قارئات أو أجهزة استقبال الصوت والفيديو في أنظمة الاتصال الحديثة ، لتوجيه هذا الجهاز وإعلامه بكيفية التعامل مع البيانات أو كيفية تنفيذ سلسلة من الإجراءات المطلوبة تسمى الخوارزمية. تتبع عملية البرمجة قواعد خاصة باللغة التي يختارها المبرمج. لكل لغة برمجة خصائصها الخاصة التي تميزها عن الأخرى وتجعلها مناسبة بدرجات متفاوتة لكل نوع من البرامج "
    },
    "french": 
    {
      "title": "french",
      "description": 
       " La programmation est le processus consistant à écrire des instructions et à diriger des commandes vers un ordinateur ou un autre appareil tel que des lecteurs DVD ou des récepteurs audio et vidéo dans les systèmes de communication modernes, pour diriger cet appareil et lui indiquer comment traiter. les données ou comment effectuer une série d'actions requises appelées algorithme. Le processus de programmation suit des règles spécifiques au langage choisi par le programmeur. "
    }
  }

