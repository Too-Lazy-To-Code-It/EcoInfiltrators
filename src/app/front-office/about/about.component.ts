import { Component } from '@angular/core';
import { WhyChooseComponent } from "../landing/why-choose/why-choose.component";
import { TestimonialSectionComponent } from "../landing/testimonial-section/testimonial-section.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [WhyChooseComponent, TestimonialSectionComponent]
})
export class AboutComponent {

}
