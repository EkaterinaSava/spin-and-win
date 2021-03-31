# Пояснения к верстке

Тестовое задание было выполнено примерно за три с половиной полных рабочих дня.

*Значительную сложность внесла необходимость использования программы Photoshop. Данное ПО является платным и, к сожалению, у меня его не было (покупка ради тестового задания показалась крайне нецелесообразной), поэтому изначально я пользовалась бесплатным онлайн аналогом. После завершения верстки я проверила картинки, экспортированные через бесплатную программу и через Photoshop, и с грустью обнаружила несоответствие экпортируемых изображений, поэтому пришлось дополнительно искать человека, обладающего программой Photoshop и перевырезать всю графику. По этой причине тестовое задание я высылаю 21 августа, а не "до 21 августа" как требовалось. Спасибо за понимание.*

—

 - Верстка проверена на валидность HTML- и СSS-кода *(ошибки и предупреждения валидаторов отсутствуют)* и на pixel perfect *(есть допустимые незначительные расхождения, обусловленные неравномерными расстояниями между элементами в макете)*
 - Все изображения адаптированы под ретину и оптимизированы с помощью компрессора *(достигутая оптимизация: 3.6Мб => 1,4Мб)*
 - Стили и скрипты сконкатенированы и минифицированы
 - Для сборки использована система сборки Gulp
 - Добавлено адаптивное поведение для планшетов и мобильных телефонов *(по личному усмотрению, в силу отсутствия макетов)*

## Возможности улучшения пользовательского опыта

К сожалению, из-за использования дизайнером значительного количества градиентов для текста, бордеров, теней и других элементов, не удалось минимизировать количество использованных картинок.

Для оптимизации загрузки и работы проекта необходимо обсудить возможность отказа от ряда градиентов, которые не воспроизводятся средствами CSS, что позволило бы значительно уменьшить количество png-файлов.

По этой же причине пришлось дублировать каждый из элементов, для которых были использованы png-файлы в качестве бекграундов, поскольку при первом заходе пользователя на страницу, из-за особенностей работы браузеров, картинки при ховере подгружаются в момент наведения, что вызывало значительно видимое моргание. Использование псевдоэлементов с изменением прозрачности позволило избежать этого эффекта и добиться плавности при ховере, но одновременно с этим увеличило размер СSS-файла, что так же можно было бы оптимизировать при отказе от сложных градиентов.

Еще можно было бы добавить для инпутов состояние фокусировки и валидацию ввода, с выводом ошибок.