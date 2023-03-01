<script>
const calculateAge = () {
	const dob = new Date(document.getElementById("dob").value);
	const now = new Date();
	const diff = now - dob;
	const age = new Date(diff);
	const years = age.getUTCFullYear() - 1970;
	const months = age.getUTCMonth();
	const days = age.getUTCDate() - 1;
	document.getElementById("result").innerHTML = `You are ${years} years, ${months} months, and ${days} days old.`;
};
document.getElementById("calculate").addEventListener("click", calculateAge);
</script>
