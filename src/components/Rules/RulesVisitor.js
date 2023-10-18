import { Box } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import './rules.css'
export default function RulesVisitor() {
    const {t}= useTranslation()
  return (
    <Box className='rulesss' sx={{
        pt:'110px'
    }}>
      <h1 dangerouslySetInnerHTML={{__html:t("RulesVisitors.visistoryTitle") }} ></h1>
      <p dangerouslySetInnerHTML={{__html:t("RulesVisitors.visistoryText") }}></p>
      <p>1. Оформление витрин: <br />
1.1 Вывески, рекламно-информационные материалы не должны перекрывать более 30% 
общей площади витрины. <br />
1.2 Сюжеты (рисунки, стилизованные фото и др.) не имеют ограничения по форме, цвету,  
структуре (могут быть прямоугольные, круглые, квадратные или неправильной формы). <br />
1.3 Содержание сюжетов, оформляющих витрину, не должны противоречить моральноэтическим нормам (не использовать в оформлении витрины элементов, отражающих сцены 
насилия, порнографии, расизма и других элементов). <br />
1.4 Запрещается размещать временные самодельные наклейки (печать на офисных приборах). <br />
1.5 Запрещается размещать объявления с информацией о поиске сотрудников. В скором 
времени эту информацию можно будет разместить на официальном сайте FAMILY PARK. <br />
1.6. Запрещается размещение адресов интернет-магазинов на витринах и рекламных 
материалах <br />
1.7 Праздничное оформление витрин воздушными шарами производится только на период 
проведения торжественных мероприятий. <br />
1.8 Все изменения в оформлении витрины должны быть согласованы с отделом маркетинга 
FAMILY PARK не позднее чем за 2 рабочих дня. Предварительно визуализации должны быть 
отправлены на почту familypark.uz@gmail.com. <br />
1.9 Размещение рекламных материалов предварительно обязательно сопровождается 
оформлением необходимой документации, подписанной со стороны администрации ТРЦ (заявки 
на ввоз/вывоз оборудования) <br />
1.10 Расположение рекламных материалов за пределами арендуемой площади розничной 
торговли не разрешается, включая временные стенды, roll-up, пауки, подиумы и прочее. <br />
1.11 Администрация потребует немедленного удаления из Центра любых вывесок, рекламных 
материалов, щитов, оформленных ненадлежащим образом или содержащих информацию, 
противоречащую Закону Республики Узбекистан «О рекламе». <br />
2. Фото и видео съемки: <br />
2.1 Запрещается производить фото- или видеосъемки в ТРЦ или вокруг него (в том числе и в 
арендованном помещении) без специального письменного разрешения администрации ТРЦ. 
Пожалуйста, обратите внимание на то, чтобы все такие просьбы подавались минимум за 24 часа 
до проведения планируемой сессии для того, чтобы дать время для надлежащего рассмотрения 
данного вопроса. <br />
3. Звуковое сопровождение: <br />
3.1 Воспроизводимая с помощью звукоусилительной аппаратуры музыка, 
звуковоспроизводящее оборудование или живые выступы в арендованных помещениях не должны 
выходить за пределы допустимого уровня громкости – 75 дБ. <br />
3.2 При проведении торжественных и праздничных мероприятий, при расположении 
звукоусилительной аппаратуры вне арендованного помещения, уровень громкости музыки не 
должен превышать 75 дБ и препятствовать деятельности других арендаторов. <br />
4.3 Использование звуковоспроизводящей аппаратуры в помещениях торговой галереи без 
разрешения администрации ТРЦ запрещено. <br />
4. Маркетинговые исследования: <br />
4.1 В случае привлечения предприятием розничной торговли/арендатором 
организаций/компаний по изучению рынка, необходимо получить разрешения от администрации 
ТРЦ, прежде чем проводить интервью с покупателями в зонах общего пользования.
5. Дополнительное размещение рекламы на территории ТРЦ:
5.1 Арендатор имеет право проводить рекламные акции/мероприятия на территории ТРЦ 
только после согласования с представителем отдела маркетинга ТРЦ (информирование по эл. 
адрес familypark.uz@gmail.com). Для согласования нужно предоставить полную информацию: 
срок проведения, вид рекламного проявления, всю техническую документацию тому подобное.
5.2 Дополнительные рекламные мероприятия/ рекламные плакаты/ аудио-реклама и т.д. 
проводятся/размещаются на территории ТРЦ на коммерческих условиях.
5.3 Размещение рекламных материалов/проведение мероприятий предварительно обязательно 
сопровождается оформлением необходимой документации, подписанной со стороны 
администрации ТРЦ (заявки на ввоз/вывоз оборудования, допуск на территорию ТРЦ).
5.4 Запрещается на территории ТРЦ размещение следующих рекламных конструкций: паук, 
штендер и другие подобные конструкции.
5.5 Арендодатель оставляет за собой право отказать в размещении дополнительных 
рекламных конструкций.
6. Размещение информации на сайте:
6.1 На официальном сайте арендатор имеет право на размещение следующей информации:
- Документ ворд с информацией о магазине
- Логотип в векторе
- Фото фасада магазина
- Номер телефона магазина в нашем ТРЦ
- Сайт магазина
- Информацию по каждому магазину отсылаете отдельным архивом
6.2. Арендатор имеет право разместить в соответствующем разделе информацию об 
акциях/скидках для этого нужно предоставить:
- название акции/новости (на узб., рус., англ. языках)
- текст (на узб., рус., англ. языках)
- изображение (размер 738х454, формат png)
7. Размещение информации на страницах в социальных сетях:
7.1. Информация о деятельности арендатора размещаются на страницах в социальных сетях 
Facebook, Instagram в следующих случаях:
- при открытии магазина
- при проведении общей рубрики
- при проведении конкурса с призовым фондом, предоставленным арендатором
- информация о скидках и новых коллекциях
- информация о специальных предложениях.
Требования по контенту для социальных сетей:
- пост 1080*1080 jpeg
- Стори 1920*1080 jpeg
- Документ ворд с информацией об акции (сопроводительный текст)
- Формат TIFF со слоями для нашей возможности редактирования и адаптации по брендбуку
- Логотип в векторе
- Все высылается одним архивом
Не забывайте, что вся информация, анонсирующая любые новости вашего магазина, сможет 
увеличить товарооборот в разы. Присылайте контент по мере поступления.
8. Дополнительно:
8.1 Обо всех визитах знаменитостей или известных личностей необходимо уведомлять 
администрацию ТРЦ, не менее чем за 7 дней до визита. Менеджер по маркетингу ТРЦ сделает все 
возможное, чтобы помочь в рекламе визита, а администрация ТРЦ обеспечит необходимые меры 
по охране и безопасности. Если считается целесообразным принятие дополнительных мер 
безопасности, такие мероприятия и связанные с этим расходы проводятся исключительно за счет 
соответствующего предприятия розничной торговли. (информирование по эл. адрес 
familypark.uz@gmail.com)
8.2 Арендаторы имеют право отдельно осуществлять рекламирование своей деятельности или 
магазина при условии, что оно не противоречит рекламированию (рекламной деятельности) ТРЦ в 
целом.
8.3 Все ремонтные и другие работы выполняются исключительно с 23:00 до 9:00 по 
предварительно согласованной заявке с администрацией.
4. Пример заявки для проведения любых активностей в ТРЦ, ниже. Все заявки заполняются 
на инфостойке и передаются администратору инфостойки до 16:00, после 18:00 арендатор может 
забрать свою подписанную заявку на стойке администрации</p>
    </Box>
  )
}