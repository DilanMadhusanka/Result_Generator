function tot_1() {
	var Assign_1 = document.getElementById('assi_1').value;
	var Assign_2 = document.getElementById('assi_2').value;
	var Assign_3 = document.getElementById('assi_3').value;
	var Assign_4 = document.getElementById('assi_4').value;

	//getFullMarkAssignment
	var total_mark_assign_1 = document.getElementById('total_mark_assign_1').value;
	var total_mark_assign_2 = document.getElementById('total_mark_assign_2').value;
	var total_mark_assign_3 = document.getElementById('total_mark_assign_3').value;
	var total_mark_assign_4 = document.getElementById('total_mark_assign_4').value;

	var total_assign = parseInt(Assign_1)/parseInt(total_mark_assign_1)*2.5 +parseInt(Assign_2)/parseInt(total_mark_assign_2)*2.5+parseInt(Assign_3)/parseInt(total_mark_assign_3)*2.5+parseInt(Assign_4)/parseInt(total_mark_assign_4)*2.5;
	console.log(total_assign.toString());
	document.getElementById("tota").value = total_assign;

	return total_assign;
}

function tot_2() {
	var test_1 = document.getElementById('test_1').value;
	var test_2 = document.getElementById('test_2').value;
	var test_3 = document.getElementById('test_3').value;
	var test_4 = document.getElementById('test_4').value;

	//getFullMarkAssignment
	var total_mark_inclass_1 = document.getElementById('total_mark_inclass_1').value;
	var total_mark_inclass_2 = document.getElementById('total_mark_inclass_2').value;
	var total_mark_inclass_3 = document.getElementById('total_mark_inclass_3').value;
	var total_mark_inclass_4 = document.getElementById('total_mark_inclass_4').value;

	var total_test = parseInt(test_1)/parseInt(total_mark_inclass_1)*2.5 + parseInt(test_2)/parseInt(total_mark_inclass_2)*2.5 + parseInt(test_3)/parseInt(total_mark_inclass_3)*2.5 + parseInt(test_4)/parseInt(total_mark_inclass_4)*2.5;
	document.getElementById('total_inTest').value = total_test;

	return total_test;
}

function marksPresentation() {
	var mark_pre = parseInt(document.getElementById('present').value);
	return mark_pre;
}

function marksMidTerms() {
	var mark_midT = parseInt(document.getElementById('mid_term').value);
	return mark_midT;
}

function marksFinalTerms() {
	var mark_fiT = parseInt(document.getElementById('final_term').value);
	return mark_fiT;
}

function fullMarks() {
	var total_marks = tot_1() + tot_2() + marksPresentation() + marksMidTerms() + marksFinalTerms();
	document.getElementById('all_marks').value = total_marks;
	return total_marks;
}

function giveGrade() {
	var final_marks = fullMarks();

	if(final_marks>85) {
		document.getElementById('grade').value = "A+";
	}

	else if(final_marks>75) {
		document.getElementById('grade').value = "A";
	}

	else if(final_marks>70) {
		document.getElementById('grade').value = "A-";
	}

	else if(final_marks>65) {
		document.getElementById('grade').value = "B+";
	}

	else if(final_marks>60) {
		document.getElementById('grade').value = "B";
	}

	else if(final_marks>55) {
		document.getElementById('grade').value = "B-";
	}

	else if(final_marks>50) {
		document.getElementById('grade').value = "C+";
	}

	else if(final_marks>45) {
		document.getElementById('grade').value = "C";
	}

	else if(final_marks>40) {
		document.getElementById('grade').value = "C-";
	}

	else if(final_marks>35) {
		document.getElementById('grade').value = "D+";
	}

	else if(final_marks>30) {
		document.getElementById('grade').value = "D";
	}

	else if(final_marks>25) {
		document.getElementById('grade').value = "D-";
	}

	else if(final_marks>20) {
		document.getElementById('grade').value = "E+";
	}

	else {
		document.getElementById('grade').value = "E";
	}
}