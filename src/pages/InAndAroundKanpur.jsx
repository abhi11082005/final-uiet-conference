import tajMahal from "../assets/inAndAroundKanpur/tajMahal.jpeg";
import chitrakoot from "../assets/inAndAroundKanpur/chitrakoot.png";
import prayagraj from "../assets/inAndAroundKanpur/prayagraj.png";
import varanasi from "../assets/inAndAroundKanpur/varanasi.png";
import vrindavan from "../assets/inAndAroundKanpur/vrindavan.png";
import sarnath from "../assets/inAndAroundKanpur/sarnath.png";
import Ayodhya from "../assets/inAndAroundKanpur/ayodhya.jpeg";
import Dudhwa from "../assets/inAndAroundKanpur/dudhwa.jpeg";
import jkTemple from "../assets/inAndAroundKanpur/jkTemple.jpg";


const InAndAroundKanpur = () => {
    return (
        <div>
            {/* Heading */}
            <div className="mt-8 mb-16 fade-enter-done">
                <h1 className="text-4xl font-bold text-third mb-8">
                    IN AND AROUND KANPUR
                </h1>
            </div>

            {/* Cards Container */}
            <div className="flex justify-evenly flex-wrap">
                {/* Agar */}
                <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-8">
                    <img
                        className="rounded-t-lg h-48 w-full object-cover"
                        src={tajMahal}
                        alt="Agar"
                    />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Agar
                        </h5>
                        <p className="card-desc mb-3 font-normal text-xs text-gray-700 dark:text-gray-400 text-justify">
                            The Taj Mahal in Agra, India, is a white marble mausoleum built by
                            Emperor Shah Jahan in 1653 in memory of his wife, Mumtaz Mahal.
                            Renowned for its beauty and symmetry, it symbolizes eternal love
                            and blends Islamic, Persian, and Indian...
                        </p>
                        <a href="https://en.wikipedia.org/wiki/Taj_Mahal" className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-third focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg
                                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Varanasi */}
                <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-8">
                    <img
                        className="rounded-t-lg h-48 w-full object-cover"
                        src={varanasi}
                        alt="Varanasi"
                    />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Varanasi
                        </h5>
                        <p className="card-desc mb-3 font-normal text-xs text-gray-700 dark:text-gray-400 text-justify">
                            Varanasi, also known as Banaras or Kashi, is one of India’s oldest
                            and most sacred cities, located on the banks of the Ganges River in
                            Uttar Pradesh. Known for its ghats, temples, and vibrant cultural
                            heritage, it’s a major pilgrimage site, especially for...
                        </p>
                        <a
                            href="https://en.wikipedia.org/wiki/Varanasi"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-third focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Read more
                            <svg
                                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Prayagraj */}
                <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-8">
                    <img
                        className="rounded-t-lg h-48 w-full object-cover"
                        src={prayagraj}
                        alt="Prayagraj"
                    />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Prayagraj
                        </h5>
                        <p className="card-desc mb-3 font-normal text-xs text-gray-700 dark:text-gray-400 text-justify">
                            Prayagraj, also known as the City of Sangam, is where the Ganges,
                            Yamuna, and mythical Saraswati rivers meet. It’s a major Hindu
                            pilgrimage site, famous for hosting the Kumbh Mela and home to
                            ancient temples and the historic Allahabad Fort.
                        </p>
                        <a
                            href="https://en.wikipedia.org/wiki/Prayagraj"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-third focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Read more
                            <svg
                                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* JK Temple */}
                <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-8">
                    <img
                        className="rounded-t-lg h-48 w-full object-cover"
                        src={jkTemple}
                        alt="Jk Temple"
                    />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            JK TEMPLE
                        </h5>
                        <p className="card-desc mb-3 font-normal text-xs text-gray-700 dark:text-gray-400 text-justify">
                            JK Temple (Juggilal Kamlapat temple) is a Hindu temple in the Indian
                            city of Kanpur, Uttar Pradesh, India.It is considered to be a unique
                            blend of ancient and modern architecture. The mandapa of the temple has
                            been constructed with high roof for...
                        </p>
                        <a
                            href="https://en.wikipedia.org/wiki/JK_Temple"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-third focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Read more
                            <svg
                                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Chitrakoot */}
                <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-8">
                    <img
                        className="rounded-t-lg h-48 w-full object-cover"
                        src={chitrakoot}
                        alt="Chitrakoot"
                    />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Chitrakoot
                        </h5>
                        <p className="card-desc mb-3 font-normal text-xs text-gray-700 dark:text-gray-400 text-justify">
                            Chitrakoot, on the Uttar Pradesh–Madhya Pradesh border, is a sacred
                            town linked to the Ramayana, where Lord Rama, Sita, and Lakshmana
                            are believed to have spent part of their exile. It's known for holy
                            sites like Ramghat and Kamadgiri...
                        </p>
                        <a
                            href="https://en.wikipedia.org/wiki/Chitrakoot,_Madhya_Pradesh"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-third focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Read more
                            <svg
                                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Vrindavan */}
                <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-8">
                    <img
                        className="rounded-t-lg h-48 w-full object-cover"
                        src={vrindavan}
                        alt="Vrindavan"
                    />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Vrindavan
                        </h5>
                        <p className="card-desc mb-3 font-normal text-xs text-gray-700 dark:text-gray-400 text-justify">
                            Vrindavan, in Uttar Pradesh, India, is a sacred town known for its
                            association with Lord Krishna's childhood. Filled with temples
                            like the Banke Bihari and ISKCON Temple, it’s a major pilgrimage
                            site for devotees, especially during festivals...
                        </p>
                        <a
                            href="https://en.wikipedia.org/wiki/Vrindavan"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-third focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Read more
                            <svg
                                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Ayodhya */}
                <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-8">
                    <img
                        className="rounded-t-lg h-48 w-full object-cover"
                        src={Ayodhya}
                        alt="Ayodhya"
                    />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Ayodhya
                        </h5>
                        <p className="card-desc mb-3 font-normal text-xs text-gray-700 dark:text-gray-400 text-justify">
                            Ayodhya, in Uttar Pradesh, India, is an ancient city revered as the
                            birthplace of Lord Rama in Hindu tradition. It’s home to numerous
                            temples, including the famous Ram Janmabhoomi temple, and is a
                            major pilgrimage destination, especially...
                        </p>
                        <a
                            href="https://en.wikipedia.org/wiki/Ayodhya"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-third focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Read more
                            <svg
                                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Sarnath */}
                <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-8">
                    <img
                        className="rounded-t-lg h-48 w-full object-cover"
                        src={sarnath}
                        alt="Sarnath"
                    />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Sarnath
                        </h5>
                        <p className="card-desc mb-3 font-normal text-xs text-gray-700 dark:text-gray-400 text-justify">
                            Sarnath, near Varanasi in Uttar Pradesh, India, is a revered
                            Buddhist site where Gautama Buddha delivered his first sermon after
                            attaining enlightenment. It’s home to the Dhamek Stupa, ancient
                            monasteries, and the Ashoka Pillar...
                        </p>
                        <a
                            href="https://en.wikipedia.org/wiki/Sarnath"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-third focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Read more
                            <svg
                                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Dudhwa National Park */}
                <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-8">
                    <img
                        className="rounded-t-lg h-48 w-full object-cover"
                        src={Dudhwa}
                        alt="Dudhwa National Park"
                    />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Dudhwa National Park
                        </h5>
                        <p className="card-desc mb-3 font-normal text-xs text-gray-700 dark:text-gray-400 text-justify">
                            Dudhwa National Park, located in Uttar Pradesh, India, is a
                            protected area known for its rich biodiversity and dense forests.
                            It houses endangered species like the Bengal tiger, Indian
                            rhinoceros, and swamp deer, as well as a...
                        </p>
                        <a
                            href="https://en.wikipedia.org/wiki/Dudhwa_National_Park"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-third focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Read more
                            <svg
                                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

/* Reusable Read More Button */
const ReadMoreButton = () => (
    <a
        href="#"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-third focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
        Read more
        <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
        >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
            />
        </svg>
    </a>
);

export default InAndAroundKanpur;

