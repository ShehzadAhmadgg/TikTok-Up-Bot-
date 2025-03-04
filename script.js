document.getElementById('claimForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskId = document.getElementById('taskId').value;
    // Here you can add the logic to claim the task using Like4Like API
    alert('Task ID ' + taskId + ' claimed successfully!');
});
