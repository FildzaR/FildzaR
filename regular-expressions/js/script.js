$(function () 
{
    const namaRegex = new RegExp('^[A-Z][a-zA-Z.-]{0,}( [A-Z][a-zA-Z.-]*)*$');
    const notelpRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    const passwordRegex = new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$');
    const noktpRegex = new RegExp('^[0-9]{16}$');
    const umurRegex = new RegExp('^([0-9]|[1-9][0-9]|1[0-0][0-9]|110)$');

    $('input').each(function ()
    {
        $(this).on('input', function ()
        {
            const pElement = $(this).parent().siblings().filter('p');

            if ($(this).attr('id') == 'nama-regex') 
            {
                if (namaRegex.test($(this).val())) 
                {
                    $(this).removeClass('focus:ring-indigo-400 focus:border-indigo-300 focus:ring-red-500 focus:border-red-300')
                    $(this).addClass('focus:ring-green-500 focus:border-green-300')

                    pElement.html('Nama Valid 👍')
                    pElement.removeClass('text-red-700')
                    pElement.addClass('text-green-700')   
                }
                else
                {
                    $(this).removeClass('focus:ring-indigo-400 focus:border-indigo-300 focus:ring-green-500 focus:border-green-300')
                    $(this).addClass('focus:ring-red-500 focus:border-red-300')

                    pElement.html('Nama Invalid, gunakan huruf kapital di setiap awal kata cth : John Doe')
                    pElement.removeClass('text-green-700')
                    pElement.addClass('text-red-700')
                }
            }
            else if ($(this).attr('id') == 'notelp-regex')
            {
                if (notelpRegex.test($(this).val())) 
                {
                    $(this).removeClass('focus:ring-indigo-400 focus:border-indigo-300 focus:ring-red-500 focus:border-red-300')
                    $(this).addClass('focus:ring-green-500 focus:border-green-300')

                    pElement.html('Nomor telepon Valid 👍')
                    pElement.removeClass('text-red-700')
                    pElement.addClass('text-green-700')   
                }
                else
                {
                    $(this).removeClass('focus:ring-indigo-400 focus:border-indigo-300 focus:ring-green-500 focus:border-green-300')
                    $(this).addClass('focus:ring-red-500 focus:border-red-300')

                    pElement.html('Nomor telepon Invalid, gunakan kode negara cth : +6281234567890')
                    pElement.removeClass('text-green-700')
                    pElement.addClass('text-red-700')
                }
            }
            else if ($(this).attr('id') == 'password-regex')
            {
                if (passwordRegex.test($(this).val())) 
                {
                    $(this).removeClass('focus:ring-indigo-400 focus:border-indigo-300 focus:ring-red-500 focus:border-red-300')
                    $(this).addClass('focus:ring-green-500 focus:border-green-300')

                    pElement.html('Password Valid 👍')
                    pElement.removeClass('text-red-700')
                    pElement.addClass('text-green-700')   
                }
                else
                {
                    $(this).removeClass('focus:ring-indigo-400 focus:border-indigo-300 focus:ring-green-500 focus:border-green-300')
                    $(this).addClass('focus:ring-red-500 focus:border-red-300')

                    pElement.html('Password Invalid, gunakan minimal 1 uppercase, 1 angka, dan 8 karakter')
                    pElement.removeClass('text-green-700')
                    pElement.addClass('text-red-700')
                }
            }
            else if ($(this).attr('id') == 'noktp-regex')
            {
                if (noktpRegex.test($(this).val())) 
                {
                    $(this).removeClass('focus:ring-indigo-400 focus:border-indigo-300 focus:ring-red-500 focus:border-red-300')
                    $(this).addClass('focus:ring-green-500 focus:border-green-300')

                    pElement.html('Nomor KTP Valid 👍')
                    pElement.removeClass('text-red-700')
                    pElement.addClass('text-green-700')   
                }
                else
                {
                    $(this).removeClass('focus:ring-indigo-400 focus:border-indigo-300 focus:ring-green-500 focus:border-green-300')
                    $(this).addClass('focus:ring-red-500 focus:border-red-300')

                    pElement.html('Nomor KTP Invalid, gunakan format angka 16 digit')
                    pElement.removeClass('text-green-700')
                    pElement.addClass('text-red-700')
                }
            }
            else if ($(this).attr('id') == 'umur-regex')
            {
                if (umurRegex.test($(this).val())) 
                {
                    $(this).removeClass('focus:ring-indigo-400 focus:border-indigo-300 focus:ring-red-500 focus:border-red-300')
                    $(this).addClass('focus:ring-green-500 focus:border-green-300')

                    pElement.html('Umur Valid 👍')
                    pElement.removeClass('text-red-700')
                    pElement.addClass('text-green-700')   
                }
                else
                {
                    $(this).removeClass('focus:ring-indigo-400 focus:border-indigo-300 focus:ring-green-500 focus:border-green-300')
                    $(this).addClass('focus:ring-red-500 focus:border-red-300')

                    pElement.html('Umur Invalid, gunakan format angka maks 3 digit dan lebih kecil dari 110')
                    pElement.removeClass('text-green-700')
                    pElement.addClass('text-red-700')
                }
            }
        })
    })
})