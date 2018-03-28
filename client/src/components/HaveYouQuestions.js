import React from 'react'
import '../styles/haveyouquestions.css';

class HaveYouQuestions extends React.Component{
    render(){
        return(
            <div className="questions row">
                <div className="questions-block row">
                    <div className="col-lg-6 col-sm-6 questions-block-text">
                        <h3>У вас є питання?</h3>
                        <h6>Як створити свій сайт школи?</h6>
                        <p>Створити сайт школи самому на платформі Scholla дуже просто завдяки тому,
                            що надається рішення по суті вирішуе всі технічні питання.
                            Створення сайту школі своїми руками безкоштовно, так як Schoolla містить
                            шаблони дизайнів і інструментарій для редагування вмісту сторінок.
                            Відкриті сайт можна за килька годін, до того ж це не вимагае грошового
                            внеску або абонетської плати. Для цього потрібно зареєструватіся,
                            після чого ви зможете приступити до роботи.</p>
                    </div>
                    <div className="col-lg-6 col-sm-6 questions-block-form">
                        <form>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default HaveYouQuestions
