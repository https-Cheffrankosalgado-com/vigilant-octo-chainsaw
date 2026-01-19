document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('clientForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = {};
        
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        // Log the data (in a real application, you would send this to a server)
        console.log('Datos del formulario:', data);
        
        // Show success message
        showSuccessMessage();
        
        // Reset form after a delay
        setTimeout(() => {
            form.reset();
            hideSuccessMessage();
        }, 3000);
    });
    
    function showSuccessMessage() {
        // Create success message if it doesn't exist
        let successMsg = document.querySelector('.success-message');
        if (!successMsg) {
            successMsg = document.createElement('div');
            successMsg.className = 'success-message';
            successMsg.textContent = '¡Formulario enviado exitosamente!';
            form.insertBefore(successMsg, form.firstChild);
        }
        successMsg.classList.add('show');
    }
    
    function hideSuccessMessage() {
        const successMsg = document.querySelector('.success-message');
        if (successMsg) {
            successMsg.classList.remove('show');
        }
    }
    
    // Add input validation feedback
    const requiredInputs = form.querySelectorAll('[required]');
    
    requiredInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                this.style.borderColor = '#ff6b6b';
            } else {
                this.style.borderColor = '#4caf50';
            }
        });
        
        input.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                this.style.borderColor = '#4caf50';
            }
        });
    });
});
