import { ProfileSidebar } from "@/components/ProfileSidebar";
import { PublicationItem } from "@/components/PublicationItem";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">
      <ProfileSidebar />
      
      <main className="flex-1 px-6 py-12 lg:px-16 lg:py-16 max-w-5xl">
        {/* About Me */}
        <section className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-base text-foreground leading-relaxed">
            I am a Ph.D. student at ...
          </p>
        </section>

        {/* Research Interests */}
        <section className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
            Research Interests
          </h2>
          <ul className="list-none space-y-2">
            <li className="text-base text-foreground">
              <strong>Computer Vision:</strong> image recognition, image generation, video captioning
            </li>
            <li className="text-base text-foreground">
              <strong>Machine Learning:</strong> meta-learning, incremental learning, transfer learning
            </li>
          </ul>
        </section>

        {/* News */}
        <section className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
            News
          </h2>
          <ul className="list-none space-y-2">
            <li className="text-base text-foreground">
              <strong>[Feb. 2020]</strong> Our paper about incremental learning is accepted to CVPR 2020.
            </li>
            <li className="text-base text-foreground">
              <strong>[Feb. 2020]</strong> We will host the ACM Multimedia Asia 2020 conference in Singapore!
            </li>
            <li className="text-base text-foreground">
              <strong>[Sept. 2019]</strong> Our paper about few-shot learning is accepted to NeurIPS 2019.
            </li>
            <li className="text-base text-foreground">
              <strong>[Mar. 2019]</strong> Our paper about few-shot learning is accepted to CVPR 2019.
            </li>
          </ul>
        </section>

        {/* Publications */}
        <section className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
            Publications
          </h2>
          
          <PublicationItem
            image="/placeholder.svg"
            conference="MICCAI"
            title="Continual Learning for Abdominal Multi-Organ and Tumor Segmentation"
            authors="Yixiao Zhang, Xinyi Li, Huimiao Chen, Alan Yuille, Yaoyao Liu*, Zongwei Zhou* (*Corresponding authors)"
            venue="International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI)"
            year={2023}
            pdfLink="https://arxiv.org/pdf/2306.00988.pdf"
            codeLink="https://github.com/example/code"
            bibtexLink="#"
            badge="Early Accept"
            badgeVariant="destructive"
          />
          
          <PublicationItem
            image="/placeholder.svg"
            conference="CVPR"
            title="Mnemonics Training: Multi-Class Incremental Learning without Forgetting"
            authors="Yaoyao Liu, Yuting Su, An-An Liu, Bernt Schiele, Qianru Sun"
            venue="IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)"
            year={2020}
            pdfLink="https://arxiv.org/pdf/2002.10211.pdf"
            codeLink="https://github.com/example/code"
            bibtexLink="#"
            badge="Oral Presentation"
            badgeVariant="destructive"
          />
        </section>

        {/* Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
            Services
          </h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Conference Reviewers
            </h3>
            <ul className="list-none space-y-2">
              <li className="text-base text-foreground">
                IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2021-2023
              </li>
              <li className="text-base text-foreground">
                IEEE/CVF International Conference on Computer Vision (ICCV) 2021
              </li>
              <li className="text-base text-foreground">
                European Conference on Computer Vision (ECCV) 2022
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Journal Reviewers
            </h3>
            <ul className="list-none space-y-2">
              <li className="text-base text-foreground">
                IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)
              </li>
              <li className="text-base text-foreground">
                International Journal of Computer Vision (IJCV)
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
