import React from 'react';
import logo from "./logo_hg.png"

export default function Footer(){
    return(
<footer class="bg-neutral-950  shadow ">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://github.com/higorxi" class="flex items-center mb-4 sm:mb-0 ">
                <img src={logo} class="h-24 mr-2" alt="HG Logo" />
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Sobre me</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Politica de Privacidade</a>
                </li>
                <li>
                    <a href="#contact" class="hover:underline">Contato</a>
                </li>
            </ul>
            
        </div>
        <hr class="my-6 border-gray-700 sm:mx-auto  lg:my-8" />
        <span class="block text-sm text-gray-400 sm:text-center">© 2023 <a href="https://github.com/higorxi" class="hover:underline">GiovaneDev™</a>. Todos os direitos reservados.</span>
    </div>
</footer>
    );
}