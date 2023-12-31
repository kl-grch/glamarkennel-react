import "./contactsPage.scss";

export const metadata = {
  title: "Контакты",
};

export default function ContactsPage() {
  return (
    <div className="contacts">
      <div className="contacts__name">Ирина Алексеева</div>
      <div className="contacts__phone">
        <a href="tel:+79219507909">+7 (921) 950-79-09</a>
      </div>
      <div className="contacts__mail">
        <a href="mailto:IrinaGlamar@mail.ru?subject=Glamar (сообщение с сайта)">
          IrinaGlamar<span style={{ color: "#FF9E00" }}>@</span>mail.ru
        </a>
      </div>
      <div className="contacts__links">
        <a href="https://wa.me/79217507909" target="blank">
          <div className="links__item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#25D366"
              className="bi bi-whatsapp"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
          </div>
        </a>
        <a href="https://www.facebook.com/irina.alexeeva.14268" target="blank">
          <div className="links__item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#4267B2"
              className="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
          </div>
        </a>
        <a href="https://vk.com/id717049652" target="blank">
          <div className="links__item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 100 100"
              fill="none"
            >
              <path
                d="M0 48C0 25.3726 0 14.0589 7.02944 7.02944C14.0589 0 25.3726 0 48 0L52 0C74.6274 0 85.9411 0 92.9706 7.02944C100 14.0589 100 25.3726 100 48V52C100 74.6274 100 85.9411 92.9706 92.9706C85.9411 100 74.6274 100 52 100H48C25.3726 100 14.0589 100 7.02944 92.9706C0 85.9411 0 74.6274 0 52L0 48Z"
                fill="#0077FF"
              />
              <path
                d="M53.2085 72.0418C30.4168 72.0418 17.4169 56.4169 16.8752 30.4169H28.2919C28.6669 49.5002 37.0834 57.5835 43.75 59.2501V30.4169H54.5004V46.8751C61.0837 46.1668 67.9995 38.6669 70.3329 30.4169H81.0832C79.2915 40.5835 71.7915 48.0835 66.4582 51.1668C71.7915 53.6668 80.3336 60.2085 83.5836 72.0418H71.7499C69.2082 64.1252 62.8754 58.0001 54.5004 57.1668L54.5004 72.0418H53.2085Z"
                fill="white"
              />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}
