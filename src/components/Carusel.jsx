import React, { useState, useEffect } from 'react';
import { Carousel, DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;
const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const image_1 = {
    margin: 0,
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundImage: 'url(https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg)',
    backgroundSize: 'cover'
};

const image_2 = {
    margin: 0,
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundImage: 'url(https://druzhniy-center.ru/wp-content/uploads/1/6/b/16b73b13e7176f5ffdca08492f22fb96.jpeg)',
    backgroundSize: 'cover'
};

const image_3 = {
    margin: 0,
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundImage: 'url(https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg)',
    backgroundSize: 'cover'
};

const image_4 = {
    margin: 0,
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundImage: 'url(https://druzhniy-center.ru/wp-content/uploads/1/6/b/16b73b13e7176f5ffdca08492f22fb96.jpeg)',
    backgroundSize: 'cover'
};

function Carusel() {

    const [chooseDate, setChooseDate] = useState([])
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    // function DateFromAntd(date) {
    //     console.log(date.m)
    // }

    const onChange1 = (date, dateString) => {
        console.log(dateString);
        setChooseDate(dateString)
    };
    return (
        <>
            <h1>Date</h1>

            {/* <DatePicker onChange={(date) => { DateFromAntd(date) }} /> */}
            <DatePicker onChange={onChange1} />
            <h1>DateRange</h1>
            {/* <div>
                {chooseDate.map(
                    (item) => {
                        return <span>{item} </span>
                    }
                )}
            </div> */}
            <div style={{ padding: 20, background: 'lightgrey', fontSize: '21px' }}>
                {chooseDate.join(" - ")}

            </div>

            <Space direction="vertical" size={12}>
                <RangePicker onChange={onChange1} />
                <RangePicker showTime onChange={onChange1} />
                <RangePicker picker="week" onChange={onChange1} />
                <RangePicker picker="month" onChange={onChange1} />
                <RangePicker picker="quarter" onChange={onChange1} />
                <RangePicker picker="year" onChange={onChange1} />
            </Space>
            <h1>Carusel</h1>
            <div >
                <Carousel autoplay >
                    <div>
                        <div style={image_1}>It is place fot text</div>
                    </div>

                    <div>
                        <div style={image_2}></div>
                    </div>
                    <div>
                        <div style={image_3}></div>
                    </div>
                    <div>
                        <div style={image_4}></div>
                    </div>
                </Carousel>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores enim reiciendis fugit molestiae assumenda placeat fuga temporibus eaque, cupiditate perferendis obcaecati natus porro, velit ipsam rerum ipsum corrupti? Molestias, eum?
                Vitae maiores molestiae provident dolor cumque deserunt quaerat itaque, cum repellendus adipisci. Adipisci laborum ut iusto. Vitae, eum magnam! Perspiciatis, alias? Facere atque ea quae, earum reiciendis voluptates itaque odit.
                Ipsum doloribus sapiente architecto qui molestiae cupiditate accusantium enim expedita magni, obcaecati deleniti doloremque pariatur sint deserunt fuga quos, aperiam cumque dolores, possimus facilis distinctio? Atque minus animi dicta doloribus?
                Necessitatibus deleniti eveniet ab architecto molestias facilis accusantium quis odit fugit dolor. Sequi saepe voluptas adipisci facere maxime, repellendus, asperiores debitis magni dolores porro optio earum ad esse quis modi!
                Quibusdam dicta eveniet ipsa autem. Voluptate dignissimos esse commodi eligendi, nisi rerum sed deserunt reprehenderit distinctio iste fuga rem in corrupti quaerat obcaecati! Eveniet odit quia at harum nostrum ex.
                Tenetur amet architecto saepe inventore expedita eligendi recusandae animi nam labore eaque minima, molestiae cum fugit quis voluptatem sint doloribus nobis facilis odit culpa repudiandae autem? Similique quis ipsam aspernatur!
                Dignissimos omnis, mollitia molestiae perferendis eos dolorum iste enim at illo quas autem aperiam dolorem debitis unde magnam beatae. Quia obcaecati, quisquam eligendi sed alias deserunt doloremque placeat magnam accusamus.
                Vitae mollitia dignissimos, dolorem nesciunt odit tempora earum id in commodi minima. Iure, iusto. Dolorum magnam distinctio mollitia ratione quo eius iste, sequi veritatis illo! Quo, vitae modi! Nobis, dolor.
                Laudantium velit vel quasi mollitia, ex culpa repellat? A, ut nemo nam fuga sint at necessitatibus obcaecati eum error, minus vitae voluptate tenetur maxime atque consequuntur et. Neque, in fugit!
                Rerum, magnam dolorum. Aliquam consequatur maxime eveniet enim quos quibusdam eos odit nam quia quas? Sit, dolorum eligendi exercitationem quisquam, architecto officia recusandae veniam quas id distinctio molestiae, voluptatum expedita?
                Esse, aperiam tenetur praesentium repellat sed tempore libero harum animi eum alias perspiciatis totam earum nesciunt asperiores reprehenderit repellendus vero odio. Iste amet pariatur quos, ratione neque minima doloribus illum!
                Vitae ab veritatis pariatur optio, voluptate enim odio architecto dolorum inventore, rem quas repellendus commodi quam. Fugit quae suscipit adipisci quis consectetur delectus, aperiam perferendis libero quo doloremque vel officia!
                Esse pariatur magni rem. Placeat sequi corporis consectetur exercitationem dolor, facere quod consequuntur, eaque incidunt, ratione nostrum fugit ipsum sit recusandae quidem quas alias! Nam possimus repudiandae quam obcaecati nulla.
                Quae itaque doloribus non debitis iure voluptas, temporibus tempore reiciendis corrupti dicta ipsa eaque amet praesentium dolore. Maxime aut unde id at? Necessitatibus tempora doloribus vitae impedit. Nostrum, porro nesciunt.
                Ipsum maxime provident ut neque ex nulla in velit dignissimos modi, quam sapiente distinctio numquam dolorem soluta culpa deserunt explicabo nobis fugit inventore suscipit at aliquid? Accusantium blanditiis molestiae at.
                Ipsa iusto a officiis cum autem tempore sunt unde blanditiis tempora, inventore labore ex corporis error ipsam dignissimos suscipit? Vitae labore sunt laborum libero! Atque distinctio eos in quas quaerat.
                Maiores similique esse provident consectetur cupiditate doloribus suscipit, ut dolorem! Nesciunt inventore, ex autem reprehenderit quia, consequatur delectus consectetur hic, eveniet labore officiis. Tempora, cupiditate reprehenderit quis quidem placeat atque?
                Enim, alias deleniti. Nulla porro dicta debitis officiis aliquam possimus, asperiores recusandae amet nesciunt sequi quam sint architecto tempore eligendi magnam ratione illo dolorum veritatis vel reprehenderit consequuntur, expedita accusantium.
                Laborum quas nostrum natus, adipisci reiciendis nobis consequuntur perspiciatis voluptates a facere aperiam doloribus repellat quae, placeat mollitia odio? Cupiditate nostrum quibusdam neque officiis. Accusamus quasi eligendi id quos molestias!
                Quas ea, inventore magnam fuga, debitis, deserunt omnis porro modi ullam praesentium nisi laudantium optio? Quos, at molestias ipsum accusamus, iusto ad maxime sequi, iure iste rerum facilis! Atque, nemo!
                Suscipit sequi blanditiis incidunt fuga qui nisi eaque quae quam. Possimus odit esse magnam eaque corrupti, similique veritatis temporibus consectetur. Deserunt nesciunt explicabo corrupti fuga perspiciatis delectus suscipit possimus dicta?
                Recusandae, quasi, praesentium expedita suscipit repudiandae provident sunt, odio optio ex sed animi distinctio! Excepturi earum quos soluta tempore vitae in animi! Aliquam quo ipsa, minima sapiente iusto magnam tempore!
                Exercitationem officia animi modi, in veritatis rerum vero, sequi magni, sapiente similique deleniti eum explicabo aut accusamus commodi neque et cumque dolor excepturi quo repellendus voluptatibus consequatur! Libero, et minus.
                Doloremque est unde voluptatem accusantium, dolorem in nostrum ut! Cupiditate sunt porro perspiciatis voluptas aut, saepe minima eaque, doloremque nobis, culpa officiis veritatis excepturi! Temporibus labore cupiditate molestiae cumque ducimus!
                Quod atque recusandae ipsa incidunt a, expedita ea praesentium quae eius saepe perferendis modi, sunt similique accusamus animi est ipsum tenetur alias labore veniam dolorum odio, explicabo esse dignissimos. Commodi.
                Quas eos natus minus praesentium corporis accusantium dolore facilis labore perferendis. Voluptatum deleniti odio exercitationem harum hic eligendi culpa expedita quae veniam recusandae, consequatur, blanditiis minima ab alias! Voluptatem, voluptates.
                Provident quis natus, eum consectetur quae pariatur ipsum deleniti totam tempora odit iure necessitatibus unde id illum sed nesciunt omnis maiores autem reprehenderit laborum quaerat. Cumque sunt ipsam laudantium repudiandae.
                Facilis repellendus deleniti quisquam ullam soluta distinctio, ipsa similique amet culpa laudantium rem quis sunt explicabo voluptate et nobis ipsam corporis doloremque aspernatur non minus suscipit iste. Magni, suscipit eveniet!
                Officia facilis quos at numquam beatae itaque dicta alias nisi laborum cum? Error voluptatibus praesentium, explicabo tempore molestias cupiditate repudiandae ea dolor fugit ratione quas ullam rerum eaque id nesciunt.
                Doloribus minus natus quia aspernatur totam eligendi quisquam impedit repellendus iusto, modi inventore veniam dicta deserunt saepe neque eius sapiente a perferendis excepturi culpa. Consequuntur excepturi ipsam molestias quos maiores!
                Nesciunt consectetur perspiciatis, voluptas nihil nulla impedit culpa maiores obcaecati cupiditate excepturi dolor, est exercitationem tempore, odio maxime sint enim architecto inventore explicabo eum accusamus repellat tenetur numquam fugit! Possimus?
                Reprehenderit corrupti dicta placeat praesentium, quam autem laudantium corporis quod deleniti quibusdam neque, dolor magnam, minus ea facilis consequuntur inventore provident sunt quae cum labore quas hic voluptatem? Facere, totam.
                Ullam voluptate consequuntur deserunt repellat in expedita omnis officia fugiat, dolorem cumque, ab reiciendis sint? Quis, explicabo modi. Beatae ea temporibus corporis maxime quasi quod amet deserunt laudantium velit provident.
                Obcaecati alias porro perspiciatis labore non officia explicabo, pariatur minus corporis, enim harum sapiente praesentium, voluptas tenetur sed quae consequuntur cupiditate dolore doloremque commodi quas hic at soluta illum! Itaque!
                Mollitia placeat iusto possimus ea nihil! Ratione inventore exercitationem laborum quibusdam nihil suscipit perspiciatis. Illum, exercitationem deleniti! Qui unde, sunt quas et magnam perspiciatis repellat blanditiis perferendis? Dicta, provident sequi.
                Eius, nam eveniet velit, culpa quidem iusto minima neque unde ratione voluptate iure non modi nemo maxime? Dolor iste odit, quod iure quas, maiores nobis reprehenderit odio cupiditate, explicabo minima!
                Laborum, libero placeat repellat fugiat, totam ducimus deleniti dolorum aperiam incidunt similique sit aliquam. Magnam, quam eos asperiores, sunt aspernatur perferendis incidunt eveniet enim ipsa architecto voluptatem culpa amet odio!
                Aspernatur, possimus repellendus? Nihil, ratione, cumque beatae provident adipisci odio commodi numquam atque nesciunt voluptates rerum, porro quibusdam magni aliquam facilis saepe itaque sed quia eveniet exercitationem libero deleniti neque?
                Quasi obcaecati ipsa voluptatibus asperiores incidunt, quis, tenetur corrupti vel ut illo iure distinctio pariatur nulla ratione non. Laborum saepe, vel ea debitis excepturi dignissimos ab sed corrupti quam illum.
                Fuga deleniti, fugit eligendi autem, asperiores reprehenderit illo nisi repudiandae sunt cupiditate pariatur cum sapiente! Magnam soluta et quibusdam ipsum fugiat asperiores earum, accusantium aspernatur obcaecati qui voluptatem est sapiente.</p>
        </>
    )
}

export default Carusel