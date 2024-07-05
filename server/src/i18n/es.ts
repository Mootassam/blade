const es = {
  app: {
    title: 'Application',
  },
  auth: {
    userNotFound:
      'Désolé, nous ne reconnaissons pas vos identifiants',
    wrongPassword:
      'Désolé, nous ne reconnaissons pas vos identifiants',
    weakPassword: 'Ce mot de passe est très faible.',
    emailAlreadyInUse: 'Cet email est déjà utilisé',
    invalidEmail:
      'Veuillez fournir un email valide',
    passwordReset: {
      invalidToken:
        'Le lien de réinitialisation du mot de passe est invalide ou a expiré',
      error: 'E-mail non reconnu',
    },
    emailAddressVerificationEmail: {
      invalidToken:
        "Le lien de vérification de l'e-mail est invalide ou a expiré.",
      error: 'E-mail non reconnu',
      signedInAsWrongUser:
        'Cet e-mail de confirmation a été envoyé à {0} mais vous êtes connecté en tant que {1}.',
    },
    passwordChange: {
      invalidPassword:
        "L'ancien mot de passe n'est pas valide.",
    },
  },
  user: {
    errors: {
      userAlreadyExists:
        "L'utilisateur avec cet e-mail existe déjà.",
      userNotFound: 'Utilisateur non trouvé.',
      destroyingHimself: 'Vous ne pouvez pas vous éliminer.',
      revokingOwnPermission:
        "Vous ne pouvez pas révoquer votre propre autorisation d'administrateur.",
      revokingPlanUser:
        "Vous ne pouvez pas révoquer l'autorisation d'administrateur de l'administrateur du plan.",
      destroyingPlanUser:
        "Vous ne pouvez pas supprimer l'administrateur du plan.",
    },
  },
  tenant: {
    exists:
      'Il y a déjà un espace de travail dans cette application.',
    url: {
      exists:
        "Cette URL d'espace de travail est déjà utilisée.",
    },
    invitation: {
      notSameEmail:
        "Cette invitation a été envoyée à {0} mais vous êtes connecté en tant que {1}.",
    },
    planActive:
      "Il existe un plan actif pour cet espace de travail. Veuillez d'abord annuler le plan.",
    stripeNotConfigured: "Stripe n'est pas configuré.",
  },
  importer: {
    errors: {
      invalidFileEmpty: 'Le fichier est vide',
      invalidFileExcel:
        'Seuls les fichiers Excel (.xlsx) sont autorisés',
      invalidFileUpload:
        'Fichier non valide. Assurez-vous que vous utilisez la dernière version du modèle.',
      importHashRequired: 'Importer le hachage requis',
      importHashExistent:
        'Les données ont déjà été importées',
    },
  },
  errors: {
    notFound: {
      message: 'Perdu',
    },
    forbidden: {
      message: 'Interdit',
    },
    validation: {
      message: "Une erreur s'est produite",
    },
  },
  email: {
    error:
      "Le fournisseur de messagerie n'est pas configuré.",
  },
  preview: {
    error:
      "Désolé, cette opération n'est pas autorisée en mode aperçu.",
  },

  entities: {
    association: {
      errors: {
        unique: {

        }
      }
    },
    mandat: {
      errors: {
        unique: {

        }
      }
    },
    categorieMouv: {
      errors: {
        unique: {

        }
      }
    },
    mouvements: {
      errors: {
        unique: {

        }
      }
    },
    campagne: {
      errors: {
        unique: {

        }
      }
    },
    detailsCampagne: {
      errors: {
        unique: {
          adherent: "L'adhérent doit être unique",
          adherentId: "L'adhérent doit être unique",
        }
      }
    },
    palier: {
      errors: {
        unique: {

        }
      }
    },
    historiquePoints: {
      errors: {
        unique: {

        }
      }
    },
    projet: {
      errors: {
        unique: {

        }
      }
    },
    votes: {
      errors: {
        unique: {

        }
      }
    },
    dons: {
      errors: {
        unique: {

        }
      }
    },
    produitCategorie: {
      errors: {
        unique: {

        }
      }
    },
    produit: {
      errors: {
        unique: {

        }
      }
    },
    produitCommande: {
      errors: {
        unique: {

        }
      }
    },
  }
};

export default es;
