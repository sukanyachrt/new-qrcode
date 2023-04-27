<template>
    <div>
        <!-- Button that triggers the modal -->
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="isOpen = true">
            Open Modal
        </button>

        <!-- Modal component -->
        <div x-show="isOpen" class="fixed z-10 inset-0 overflow-y-auto">
            <div class="flex items-center justify-center min-h-screen">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <div class="bg-white rounded-lg p-6">
                    <h2 class="text-lg font-bold mb-4">Modal Title</h2>
                    <p>Modal content goes here</p>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                        @click="isOpen = false">
                        Close Modal
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
function openModal() {
    document.getElementById("overlay").classList.remove("hidden");
    document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("overlay").classList.add("hidden");
    document.getElementById("modal").classList.add("hidden");
}
</script>
  