var app = {

  init: function() {
    // DOM elements init
    this.students = document.getElementsByClassName('student');
    this.inputs = document.getElementsByTagName('input');
    this.attendance = {};
    this.studentNames = document.getElementsByClassName('name-col');

    this.generateValues();
    this.countMissedDays();
    this.updateValues();
  },

  countMissedDays: function() {
    for(let i = 0; i < this.students.length; i++) {
      let studentInput = this.students[i].getElementsByTagName('input');
      let daysMissedEl = this.students[i].getElementsByClassName('missed-col');
      let daysMissed = daysMissedEl[0].innerHTML;

      for(let i = 0; i < studentInput.length; i++) {
        if(studentInput[i].checked == false) {
          daysMissed++;
        }
      }

      daysMissedEl[0].innerHTML = daysMissed;
    }
  },

  updateValues: function() {
    // Adding event listeners to checkboxes
    for(let i = 0; i < this.inputs.length; i++) {
      this.inputs[i].addEventListener('click', function() {
        app.countMissedDays();
      });
    }
  },

  generateValues: function() {

    for(let i = 1; i < this.studentNames.length; i++) {
      let studentInput = this.students[i-1].getElementsByTagName('input');
      let name = this.studentNames[i].innerHTML;

      // Generate random values
      function getRandom() {
        return (Math.random() >= 0.5);
      }

      this.attendance[name] = [];

      // Adding to attendance object
      for (let i = 0; i < studentInput.length; i++) {
        this.attendance[name].push(getRandom());
      }

      // Populating checkboxes with object values
      for(let j = 0; j < studentInput.length; j++) {
        studentInput[j].checked = this.attendance[name][j];
      }
    }
  }

}

app.init();